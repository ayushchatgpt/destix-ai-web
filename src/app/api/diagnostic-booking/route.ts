import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, selectedService, selectedWindow, notes, telemetry } = body;

    const timestamp = new Date().toISOString();
    const istTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const bookingReport = {
      event: "DIAGNOSTIC_CALL_BOOKED",
      timestamp,
      istTime,
      lead: {
        name: name || "Anonymous Executive",
        email: email || "Not provided",
        phone: phone || "Not provided",
        company: company || "Not provided",
        service: selectedService || "Autonomous Voice Infrastructure",
        selectedWindow: selectedWindow || "Immediate Diagnostic Slot",
        notes: notes || "",
      },
      telemetry: {
        currentSection: telemetry?.currentSection || "BookingModal",
        referrer: telemetry?.referrer || "Direct / Organic",
        userAgent: telemetry?.userAgent || "Unknown Device",
      },
    };

    // 1. Prominent Console Alert in Vercel Logs
    console.log("=================================================");
    console.log("🚨 [NEW 30-MIN DIAGNOSTIC CALL BOOKING FOR AYUSH MEENA]");
    console.log(`👤 Name:     ${bookingReport.lead.name}`);
    console.log(`📧 Email:    ${bookingReport.lead.email}`);
    console.log(`📞 Phone:    ${bookingReport.lead.phone}`);
    console.log(`🏢 Company:  ${bookingReport.lead.company}`);
    console.log(`🎯 Service:  ${bookingReport.lead.service}`);
    console.log(`📅 Window:   ${bookingReport.lead.selectedWindow}`);
    console.log(`🕒 IST Time: ${bookingReport.istTime}`);
    console.log("=================================================");

    const promises: Promise<unknown>[] = [];

    // 2. Generic Webhook (n8n, Make, Custom Webhook)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL || process.env.N8N_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      promises.push(
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingReport),
        }).catch((err) => console.error("Error dispatching to LEAD_WEBHOOK_URL:", err))
      );
    }

    // 3. Discord Webhook
    const discordWebhook = process.env.DISCORD_WEBHOOK_URL;
    if (discordWebhook) {
      const discordPayload = {
        username: "DestiX AI Studio Intake",
        avatar_url: "https://ayush.company/apple-icon.png",
        content: `🚨 **New 30-Min Diagnostic Booking with Ayush Meena!**`,
        embeds: [
          {
            title: `Diagnostic Session: ${bookingReport.lead.name}`,
            color: 0xb88746, // Champagne bronze
            fields: [
              { name: "Name", value: bookingReport.lead.name, inline: true },
              { name: "Email", value: bookingReport.lead.email, inline: true },
              { name: "Phone", value: bookingReport.lead.phone, inline: true },
              { name: "Company", value: bookingReport.lead.company, inline: true },
              { name: "Selected Window", value: bookingReport.lead.selectedWindow, inline: false },
              { name: "Service Focus", value: bookingReport.lead.service, inline: false },
              { name: "Booked At (IST)", value: bookingReport.istTime, inline: true },
            ],
            footer: { text: "DestiX AI Intake Engine • ayush.company" },
          },
        ],
      };

      promises.push(
        fetch(discordWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(discordPayload),
        }).catch((err) => console.error("Error dispatching to DISCORD_WEBHOOK_URL:", err))
      );
    }

    // 4. Slack Webhook
    const slackWebhook = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhook) {
      const slackPayload = {
        text: `🚨 *New 30-Min Diagnostic Booking with Ayush Meena!*\n*Name:* ${bookingReport.lead.name}\n*Email:* ${bookingReport.lead.email}\n*Phone:* ${bookingReport.lead.phone}\n*Company:* ${bookingReport.lead.company}\n*Window:* ${bookingReport.lead.selectedWindow}\n*Service:* ${bookingReport.lead.service}\n*Time:* ${bookingReport.istTime}`,
      };

      promises.push(
        fetch(slackWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(slackPayload),
        }).catch((err) => console.error("Error dispatching to SLACK_WEBHOOK_URL:", err))
      );
    }

    // 5. Telegram Bot (if configured)
    const tgToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = process.env.TELEGRAM_CHAT_ID;
    if (tgToken && tgChatId) {
      const tgText = `🚨 *New 30-Min Diagnostic Booking with Ayush Meena!*\n\n*Name:* ${bookingReport.lead.name}\n*Email:* ${bookingReport.lead.email}\n*Phone:* ${bookingReport.lead.phone}\n*Company:* ${bookingReport.lead.company}\n*Window:* ${bookingReport.lead.selectedWindow}\n*Service:* ${bookingReport.lead.service}\n*Time:* ${bookingReport.istTime}`;
      promises.push(
        fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: tgChatId,
            text: tgText,
            parse_mode: "Markdown",
          }),
        }).catch((err) => console.error("Error dispatching to TELEGRAM:", err))
      );
    }

    // 6. Resend API (if configured)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      promises.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "DestiX AI Booking <bookings@ayush.company>",
            to: ["ayushmeenadestixai@gmail.com"],
            subject: `🚨 [NEW 30-MIN DIAGNOSTIC] ${bookingReport.lead.name} (${bookingReport.lead.company})`,
            html: `
              <h2>New 30-Min Diagnostic Call Booking</h2>
              <p><strong>Name:</strong> ${bookingReport.lead.name}</p>
              <p><strong>Email:</strong> ${bookingReport.lead.email}</p>
              <p><strong>Phone:</strong> ${bookingReport.lead.phone}</p>
              <p><strong>Company:</strong> ${bookingReport.lead.company}</p>
              <p><strong>Service Focus:</strong> ${bookingReport.lead.service}</p>
              <p><strong>Requested Window:</strong> ${bookingReport.lead.selectedWindow}</p>
              <p><strong>Time (IST):</strong> ${bookingReport.istTime}</p>
            `,
          }),
        }).catch((err) => console.error("Error dispatching to RESEND:", err))
      );
    }

    // Wait for all non-blocking integrations with 2.5s timeout safety
    if (promises.length > 0) {
      await Promise.race([
        Promise.allSettled(promises),
        new Promise((resolve) => setTimeout(resolve, 2500)),
      ]);
    }

    return NextResponse.json({
      success: true,
      message: "Diagnostic booking confirmed and dispatched to principal.",
      booking: bookingReport,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in /api/diagnostic-booking:", message);
    return NextResponse.json(
      { error: "Failed to process diagnostic booking", details: message },
      { status: 500 }
    );
  }
}
