import subprocess
import time
import json
import urllib.request
import sys

def log_print(*args, **kwargs):
    print(*args, **kwargs, flush=True)

def run_psql(query):
    try:
        res = subprocess.run(
            ["docker", "exec", "-i", "destix-dograh-postgres-1", "psql", "-U", "postgres", "-d", "postgres", "-t", "-A", "-c", query],
            capture_output=True,
            text=True,
            timeout=10
        )
        return res.stdout.strip()
    except Exception as e:
        return ""

def get_ip_info(ip):
    if not ip or ip in ["127.0.0.1", "localhost"]:
        return {}
    try:
        url = f"http://ip-api.com/json/{ip}"
        req = urllib.request.Request(url, headers={"User-Agent": "DestiXMonitor/1.0"})
        with urllib.request.urlopen(req, timeout=5) as resp:
            return json.loads(resp.read().decode())
    except Exception:
        return {}

def main():
    last_id = 1478
    log_print(f"Monitoring for incoming calls with workflow_run_id > {last_id}...")
    
    start_wait = time.time()
    # Timeout after 30 minutes if nothing happens
    while time.time() - start_wait < 1800:
        query = f"SELECT wr.id, wr.created_at, wr.state, wr.is_completed, es.client_ip, es.user_agent FROM workflow_runs wr LEFT JOIN embed_sessions es ON es.workflow_run_id = wr.id WHERE wr.id > {last_id} ORDER BY wr.id ASC LIMIT 1;"
        out = run_psql(query)
        if out:
            parts = out.split("|")
            run_id = parts[0]
            created_at = parts[1]
            state = parts[2]
            is_completed = parts[3]
            client_ip = parts[4] if len(parts) > 4 else "unknown"
            user_agent = parts[5] if len(parts) > 5 else "unknown"

            log_print(f"\n==========================================")
            log_print(f"🚨 NEW CALL DETECTED! Run ID: {run_id}")
            log_print(f"Time: {created_at}")
            log_print(f"Client IP: {client_ip}")
            log_print(f"User Agent: {user_agent}")
            
            ip_info = get_ip_info(client_ip)
            if ip_info and ip_info.get("status") == "success":
                log_print(f"Location: {ip_info.get('city')}, {ip_info.get('regionName')}, {ip_info.get('country')}")
                log_print(f"ISP/Org: {ip_info.get('isp')} / {ip_info.get('org')}")

            log_print("Call in progress... Waiting for completion to extract conversation transcript...")
            
            # Wait for call to complete
            call_start_time = time.time()
            while time.time() - call_start_time < 300: # up to 5 min call
                time.sleep(3)
                detail_query = f"SELECT is_completed, gathered_context->>'call_status', gathered_context->>'duration', transcript_url FROM workflow_runs WHERE id = {run_id};"
                detail_out = run_psql(detail_query)
                if detail_out:
                    d_parts = detail_out.split("|")
                    comp = d_parts[0]
                    status = d_parts[1] if len(d_parts) > 1 else ""
                    duration = d_parts[2] if len(d_parts) > 2 else ""
                    transcript_url = d_parts[3] if len(d_parts) > 3 else ""

                    if comp == "t" or status:
                        log_print(f"\n📞 CALL FINISHED!")
                        log_print(f"Status: {status}")
                        log_print(f"Duration: {duration} seconds")
                        
                        # Fetch transcript if available
                        time.sleep(2) # allow transcript flush to minio/db
                        try:
                            ts_script = f"""
import asyncio
from api.services.storage import storage_fs
async def get_t():
    try:
        await storage_fs.adownload_file('voice-audio/transcripts/{run_id}.txt', '/tmp/ts_{run_id}.txt')
        with open('/tmp/ts_{run_id}.txt', 'r', encoding='utf-8') as f:
            print(f.read())
    except Exception as e:
        print(f'Transcript error: {{e}}')
asyncio.run(get_t())
"""
                            res = subprocess.run(
                                ["docker", "exec", "-i", "destix-dograh-api-1", "python3", "-c", ts_script],
                                capture_output=True,
                                text=True,
                                timeout=10
                            )
                            transcript_text = res.stdout.strip()
                            log_print(f"\n--- TRANSCRIPT ---")
                            log_print(transcript_text if transcript_text else "(No speech transcribed or silent)")
                            log_print(f"------------------\n")
                        except Exception as e:
                            log_print(f"Could not fetch transcript: {e}")
                        
                        return
            return

        time.sleep(2)
        
    log_print("Watcher timed out after 30 minutes without incoming calls.")

if __name__ == "__main__":
    main()
