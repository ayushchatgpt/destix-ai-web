"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Cpu, Phone, Database, Calendar, Activity, Layers, Terminal } from "lucide-react";

export default function SpatialNeuralCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePreset, setActivePreset] = useState<"all" | "voice" | "crm" | "calendar">("all");
  const [telemetryFps, setTelemetryFps] = useState(60);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const width = container.clientWidth;
    const height = container.clientHeight || 540;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core: Icosahedron with Wireframe & Glow
    const coreGeo = new THREE.IcosahedronGeometry(2.4, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f5a0,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    const innerCoreGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x00f5a0,
      wireframe: false,
      transparent: true,
      opacity: 0.8,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    mainGroup.add(innerCore);

    // 2. Outer Particle Field (Neural Dust)
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 24;
      particlePositions[i + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i + 2] = (Math.random() - 0.5) * 16;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.08,
      transparent: true,
      opacity: 0.5,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particlePoints);

    // 3. Satellite Nodes (Voice, Qualification, CRM, Calendar)
    const satelliteData = [
      { name: "Voice Ingest", pos: new THREE.Vector3(-6, 2.8, 1), color: 0x00f5a0 },
      { name: "Neural Engine", pos: new THREE.Vector3(6, 2.5, -1), color: 0x3b82f6 },
      { name: "CRM / n8n OS", pos: new THREE.Vector3(-5, -3, 2), color: 0x10b981 },
      { name: "Calendar Dispatch", pos: new THREE.Vector3(5.5, -2.8, 1), color: 0x00f5a0 },
    ];

    const satelliteMeshes: THREE.Mesh[] = [];
    const splineCurves: THREE.QuadraticBezierCurve3[] = [];
    const dataPacketMeshes: THREE.Mesh[] = [];

    satelliteData.forEach((sat) => {
      // Node Sphere
      const satGeo = new THREE.SphereGeometry(0.55, 16, 16);
      const satMat = new THREE.MeshBasicMaterial({
        color: sat.color,
        wireframe: true,
        transparent: true,
        opacity: 0.9,
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satMesh.position.copy(sat.pos);
      mainGroup.add(satMesh);
      satelliteMeshes.push(satMesh);

      // Curve connecting to Central Core
      const midPoint = new THREE.Vector3(
        sat.pos.x * 0.4,
        sat.pos.y * 0.4 + (Math.random() - 0.5) * 2,
        sat.pos.z * 0.4 + (Math.random() - 0.5) * 2
      );
      const curve = new THREE.QuadraticBezierCurve3(sat.pos, midPoint, new THREE.Vector3(0, 0, 0));
      splineCurves.push(curve);

      // Render Curve Line
      const points = curve.getPoints(30);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: sat.color,
        transparent: true,
        opacity: 0.25,
      });
      const curveLine = new THREE.Line(curveGeo, curveMat);
      mainGroup.add(curveLine);

      // Glowing Data Packet that slides along the curve
      const packetGeo = new THREE.SphereGeometry(0.18, 8, 8);
      const packetMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const packetMesh = new THREE.Mesh(packetGeo, packetMat);
      mainGroup.add(packetMesh);
      dataPacketMeshes.push(packetMesh);
    });

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.35;
      targetY = y * 0.25;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera tilt
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      mainGroup.rotation.y = currentX + elapsedTime * 0.08;
      mainGroup.rotation.x = currentY + Math.sin(elapsedTime * 0.5) * 0.05;

      // Rotate core
      coreMesh.rotation.x = elapsedTime * 0.3;
      coreMesh.rotation.y = elapsedTime * 0.4;
      const pulse = 1 + Math.sin(elapsedTime * 3) * 0.12;
      innerCore.scale.set(pulse, pulse, pulse);

      // Animate data packets along curves
      splineCurves.forEach((curve, idx) => {
        const loopSpeed = 0.4;
        const progress = (elapsedTime * loopSpeed + idx * 0.25) % 1;
        const point = curve.getPoint(progress);
        dataPacketMeshes[idx].position.copy(point);
      });

      // Float satellites
      satelliteMeshes.forEach((mesh, idx) => {
        mesh.rotation.y += 0.01;
        mesh.position.y = satelliteData[idx].pos.y + Math.sin(elapsedTime * 2 + idx) * 0.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 540;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section id="spatial-core" className="relative py-24 sm:py-32 bg-[#08080A] border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111216] border border-white/10 text-[11px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#00F5A0] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
              // 01 SPATIAL CORE
            </div>
            <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F4F4F6] tracking-tight">
              The DestiX Neural Routing Core.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#7A7D87] max-w-md">
            Interactive WebGL model showing real-time token dispatching between autonomous voice ingest, neural qualification, and CRM database synchronization.
          </p>
        </div>

        {/* 3D WebGL Canvas Container with HUD Frame */}
        <div className="relative w-full h-[540px] sm:h-[620px] rounded-3xl bg-[#111216]/80 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
          {/* Three.js Canvas mounting point */}
          <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Top Left HUD Telemetry Overlay */}
          <div className="absolute top-6 left-6 pointer-events-none flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#08080A]/85 backdrop-blur-md border border-white/10 text-[11px] font-['JetBrains_Mono'] text-[#F4F4F6]">
              <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-beacon" />
              <span>ROUTING STATUS:</span>
              <span className="text-[#00F5A0] font-semibold">SYNCHRONIZED</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[10px] font-['JetBrains_Mono'] text-[#7A7D87] px-3 py-1 rounded-lg bg-[#08080A]/60 backdrop-blur-sm border border-white/5">
              <span>LATENCY: 380MS</span>
              <span>•</span>
              <span>PACKETS: 1.2K/S</span>
              <span>•</span>
              <span>WEBGL: 60 FPS</span>
            </div>
          </div>

          {/* Top Right Presets / Mode Selector */}
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-[#08080A]/85 backdrop-blur-md p-1.5 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setActivePreset("all")}
              className={`px-3 py-1 rounded-lg font-['JetBrains_Mono'] text-[11px] uppercase transition-all ${
                activePreset === "all"
                  ? "bg-[#00F5A0] text-[#08080A] font-bold shadow-[0_0_15px_rgba(0,245,160,0.4)]"
                  : "text-[#7A7D87] hover:text-[#F4F4F6]"
              }`}
            >
              Full Mesh
            </button>
            <button
              onClick={() => setActivePreset("voice")}
              className={`px-3 py-1 rounded-lg font-['JetBrains_Mono'] text-[11px] uppercase transition-all ${
                activePreset === "voice"
                  ? "bg-[#00F5A0] text-[#08080A] font-bold shadow-[0_0_15px_rgba(0,245,160,0.4)]"
                  : "text-[#7A7D87] hover:text-[#F4F4F6]"
              }`}
            >
              Voice
            </button>
            <button
              onClick={() => setActivePreset("crm")}
              className={`px-3 py-1 rounded-lg font-['JetBrains_Mono'] text-[11px] uppercase transition-all ${
                activePreset === "crm"
                  ? "bg-[#00F5A0] text-[#08080A] font-bold shadow-[0_0_15px_rgba(0,245,160,0.4)]"
                  : "text-[#7A7D87] hover:text-[#F4F4F6]"
              }`}
            >
              CRM/n8n
            </button>
          </div>

          {/* Bottom 4 Node Badges */}
          <div className="absolute bottom-6 inset-x-6 grid grid-cols-2 md:grid-cols-4 gap-3 pointer-events-none">
            <div className="bg-[#08080A]/85 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00F5A0]/10 border border-[#00F5A0]/30 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#00F5A0]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-['JetBrains_Mono'] text-[#7A7D87] uppercase tracking-wider">
                  Ingest Node
                </div>
                <div className="text-xs font-semibold text-[#F4F4F6] truncate">
                  Voice Telephony
                </div>
              </div>
            </div>

            <div className="bg-[#08080A]/85 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4 text-[#3B82F6]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-['JetBrains_Mono'] text-[#7A7D87] uppercase tracking-wider">
                  Inference Node
                </div>
                <div className="text-xs font-semibold text-[#F4F4F6] truncate">
                  DestiX Neural Core
                </div>
              </div>
            </div>

            <div className="bg-[#08080A]/85 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center shrink-0">
                <Database className="w-4 h-4 text-[#10B981]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-['JetBrains_Mono'] text-[#7A7D87] uppercase tracking-wider">
                  OS Pipeline
                </div>
                <div className="text-xs font-semibold text-[#F4F4F6] truncate">
                  HubSpot &amp; n8n Sync
                </div>
              </div>
            </div>

            <div className="bg-[#08080A]/85 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00F5A0]/10 border border-[#00F5A0]/30 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 text-[#00F5A0]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-['JetBrains_Mono'] text-[#7A7D87] uppercase tracking-wider">
                  Outcome Node
                </div>
                <div className="text-xs font-semibold text-[#F4F4F6] truncate">
                  Calendar Confirmed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
