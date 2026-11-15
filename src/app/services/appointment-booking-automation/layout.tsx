import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Appointment Booking & Calendar Automation | DestiX AI",
  description:
    "Autonomous AI appointment booking agents with two-way calendar sync for Google Calendar, Outlook 365, Cal.com, and CRM pipelines. Sub-second slot conflict checking, automated SMS/WhatsApp reminders, and zero double bookings.",
  keywords: [
    "ai appointment booking automation",
    "automated appointment booking system",
    "ai calendar booking agent",
    "ai scheduling software for enterprise",
    "automated booking bot",
    "ai voice receptionist appointment booking",
    "cal com ai integration",
    "google calendar ai booking bot",
    "outlook 365 ai scheduling",
    "ai appointment scheduling for clinics",
    "real estate site visit ai booking",
    "destix ai appointment booking",
    "best ai scheduling agency"
  ],
  alternates: {
    canonical: "https://ayush.company/services/appointment-booking-automation",
  },
  openGraph: {
    title: "AI Appointment Booking & Calendar Automation | DestiX AI",
    description:
      "Eliminate phone tag and calendar friction. Deploy autonomous voice and chat agents that negotiate meeting times, lock calendar slots in real-time, and dispatch confirmations in under 2 seconds.",
    url: "https://ayush.company/services/appointment-booking-automation",
    siteName: "DestiX AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ayush.company/og-image.png",
        width: 1200,
        height: 630,
        alt: "DestiX AI Enterprise AI Appointment Booking Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Appointment Booking & Calendar Automation | DestiX AI",
    description:
      "Enterprise AI calendar automation: sub-second conflict checking, instant Google Calendar and Outlook lock-in, and automated pre-call WhatsApp briefings.",
    images: ["https://ayush.company/og-image.png"],
  },
};

export default function AppointmentBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://ayush.company/services/appointment-booking-automation#service",
                name: "AI Appointment Booking & Calendar Automation",
                provider: {
                  "@type": "Organization",
                  name: "DestiX AI",
                  url: "https://ayush.company",
                },
                serviceType: "Calendar Scheduling Automation & Autonomous Telephony",
                areaServed: ["Global", "USA", "UK", "UAE", "India"],
                description:
                  "Autonomous conversational agents booking qualified site visits, diagnostic consultations, and B2B sales meetings directly into enterprise calendars with zero human intervention.",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://ayush.company",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://ayush.company/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Appointment Booking Automation",
                    item: "https://ayush.company/services/appointment-booking-automation",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How does the AI handle time-zone differences and calendar conflicts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The agent interfaces directly with the calendar API (Google Workspace, Microsoft Graph, or Cal.com) over streaming webhooks. It checks slot availability in real-time, calculates user time zones dynamically, and locks the slot with an atomic hold during the conversation to prevent double bookings.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can it qualify the caller before granting an appointment slot?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. The agent evaluates BANT criteria (Budget, Authority, Need, and Timeline). If a caller does not meet the qualification threshold, it routes them to asynchronous resources or secondary queues rather than booking time on your senior executive calendars.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What happens if a customer needs to reschedule or cancel?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Customers can reply via SMS, WhatsApp, or call back the voice agent. The system authenticates the caller via phone number or booking ID, releases the original slot instantly, and offers alternative verified available openings.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
