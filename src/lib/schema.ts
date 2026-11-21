/**
 * Schema.org JSON-LD Builders for DestiX AI (ayush.company)
 * Strict @id cross-referencing for Knowledge Graph saturation across AI search engines.
 */

export const BASE_URL = "https://ayush.company";

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * 1. Homepage & Root Organization Schema Builder
 */
export function buildRootGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "DestiX AI",
        "alternateName": [
          "DestiX AI Studio",
          "Desti",
          "DestiX",
          "DestiAI",
          "Destie",
          "Deste",
          "Dste",
          "Desties",
          "Destex",
          "Ayush DestiX",
          "Ayush Desti",
          "Ayush Deste",
          "Ayush Destex",
          "Ayush Meena AI",
          "Ayush Meena DestiX",
          "Meena AI",
          "Desti AI Agency",
          "Desti Voice Agency",
          "ayush.company"
        ],
        "legalName": "DestiX AI Autonomous Systems Studio",
        "foundingDate": "2024-04-01",
        "disambiguatingDescription":
          "DestiX AI (domain: https://ayush.company) is a specialized AI voice agent studio and autonomous telephony engineering firm based in Connaught Place, New Delhi 110001, India, founded by Ayush Meena. Completely unaffiliated with PVC industrial curtain suppliers or legacy SaaS software.",
        "url": BASE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/apple-icon.png`,
          "caption": "DestiX AI Emblem"
        },
        "founder": {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
          "name": "Ayush Meena",
          "alternateName": [
            "Ayush",
            "Ayush Meena AI",
            "Ayush DestiX",
            "Ayush Desti",
            "Meena AI",
            "Ayush AI"
          ],
          "jobTitle": "Founder & Principal AI Systems Architect",
          "url": `${BASE_URL}/about`,
          "sameAs": [
            "https://www.linkedin.com/in/ayush-meena-065a89380/",
            "https://github.com/ayushchatgpt/destix-ai-web",
            "https://www.wikidata.org/wiki/Q142174891",
            BASE_URL
          ],
          "knowsAbout": [
            "AI Voice Agents",
            "Conversational Telephony",
            "Acoustic Echo Cancellation & Silero VAD",
            "3D WebGL Storefronts",
            "Enterprise CRM Telephony Automation",
            "Low Latency Speech-to-Speech Architecture"
          ]
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": "ayushmeenadestixai@gmail.com",
            "contactType": "sales",
            "availableLanguage": ["English", "Hindi"]
          },
          {
            "@type": "ContactPoint",
            "email": "ayushmeenadestixai@gmail.com",
            "contactType": "technical support",
            "availableLanguage": ["English", "Hindi"]
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/destix-ai/",
          "https://www.linkedin.com/in/ayush-meena-065a89380/",
          "https://github.com/ayushchatgpt/destix-ai-web",
          "https://github.com/ayushchatgpt/destix-voice-telephony-benchmark",
          "https://www.wikidata.org/wiki/Q142174891",
          BASE_URL
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": BASE_URL,
        "name": "DestiX AI",
        "alternateName": ["Desti", "DestiX", "DestiX AI", "DestiAI"],
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${BASE_URL}/#service`,
        "name": "DestiX AI Autonomous Telephony Practice",
        "url": BASE_URL,
        "description":
          "Carrier-grade AI voice agents, sub-435ms voice parity, private n8n workflow clusters, and 3D WebGL spatial storefronts for high-ticket real estate and enterprise operations.",
        "email": "ayushmeenadestixai@gmail.com",
        "priceRange": "$2,000 - $$$$",
        "currenciesAccepted": "USD, EUR, GBP, AED, INR, CAD, AUD",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Connaught Place, Central Delhi",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.6304",
          "longitude": "77.2177"
        },
        "parentOrganization": {
          "@id": `${BASE_URL}/#organization`
        }
      }
    ]
  };
}

/**
 * 2. Regional Hub Schema Builder (Service + LocalBusiness / ProfessionalService)
 */
export function buildRegionalHubGraph({
  hubSlug,
  hubName,
  regionName,
  countryCode,
  telephone,
  address,
  geo,
  priceRange = "₹35,000 - ₹1,50,000",
  currenciesAccepted = "INR, USD",
  languages = ["English", "Hindi"],
  complianceNotice
}: {
  hubSlug: string;
  hubName: string;
  regionName: string;
  countryCode: string;
  telephone?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: string;
    longitude: string;
  };
  priceRange?: string;
  currenciesAccepted?: string;
  languages?: string[];
  complianceNotice?: string;
}) {
  const hubUrl = `${BASE_URL}/locations/${hubSlug}/ai-voice-agents`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${hubUrl}#service`,
        "name": `DestiX AI ${hubName}`,
        "url": hubUrl,
        "description": `Autonomous AI voice agents and conversational telephony deployed across ${hubName} and ${regionName}. ${complianceNotice || ""}`,
        "telephone": telephone,
        "priceRange": priceRange,
        "currenciesAccepted": currenciesAccepted,
        "availableLanguage": languages,
        "address": {
          "@type": "PostalAddress",
          ...address
        },
        ...(geo ? {
          "geo": {
            "@type": "GeoCoordinates",
            ...geo
          }
        } : {}),
        "parentOrganization": {
          "@id": `${BASE_URL}/#organization`
        },
        "areaServed": [
          { "@type": "City", "name": hubName },
          { "@type": "AdministrativeArea", "name": regionName },
          { "@type": "Country", "name": countryCode }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${hubUrl}#breadcrumbs`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": `${BASE_URL}/locations`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${hubName} AI Voice Agents`,
            "item": hubUrl
          }
        ]
      }
    ]
  };
}

/**
 * 3. Service Page Schema Builder (Service + Offer + FAQPage)
 */
export function buildServiceGraph({
  serviceSlug,
  serviceName,
  serviceDescription,
  serviceType = "Conversational AI & Telephony Automation",
  offers,
  faqs
}: {
  serviceSlug: string;
  serviceName: string;
  serviceDescription: string;
  serviceType?: string;
  offers?: { name: string; description: string; price?: string; priceCurrency?: string }[];
  faqs?: FaqItem[];
}) {
  const serviceUrl = `${BASE_URL}/${serviceSlug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        "name": serviceName,
        "serviceType": serviceType,
        "url": serviceUrl,
        "description": serviceDescription,
        "provider": {
          "@id": `${BASE_URL}/#organization`
        },
        ...(offers && offers.length > 0 ? {
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${serviceName} Catalog`,
            "itemListElement": offers.map((o) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": o.name,
                "description": o.description
              }
            }))
          }
        } : {})
      },
      ...(faqs && faqs.length > 0 ? [{
        "@type": "FAQPage",
        "@id": `${serviceUrl}#faq`,
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }] : []),
      {
        "@type": "BreadcrumbList",
        "@id": `${serviceUrl}#breadcrumbs`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": serviceName,
            "item": serviceUrl
          }
        ]
      }
    ]
  };
}

/**
 * 4. Benchmark Research Schema Builder (Dataset + TechArticle + SoftwareSourceCode)
 */
export function buildBenchmarkResearchGraph() {
  const pageUrl = `${BASE_URL}/research/2026-enterprise-ai-telephony-benchmark`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${pageUrl}#article`,
        "headline": "2026 Global Enterprise AI Telephony & Acoustic Latency Benchmark",
        "description": "Empirical acoustic latency, VAD accuracy, and packet jitter study benchmarked across 524,000 synthetic calls and 14 AI voice architectures.",
        "url": pageUrl,
        "inLanguage": "en",
        "author": {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
          "name": "Ayush Meena",
          "sameAs": "https://www.wikidata.org/wiki/Q142174891"
        },
        "publisher": {
          "@type": "Organization",
          "@id": `${BASE_URL}/#organization`,
          "name": "DestiX AI"
        },
        "datePublished": "2026-01-10T00:00:00+00:00",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "Dataset",
        "@id": `${pageUrl}#dataset`,
        "name": "524k Call Acoustic Latency & Telephony Benchmark Dataset",
        "description": "524,000 synthetic and production calls benchmarking roundtrip audio latency (P50 435ms), Silero VAD yield, and STT transcription Word Error Rate (WER) across 14 architectures.",
        "url": pageUrl,
        "creator": {
          "@id": `${BASE_URL}/#organization`
        },
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "distribution": {
          "@type": "DataDownload",
          "encodingFormat": "text/csv",
          "contentUrl": "https://github.com/ayushchatgpt/destix-voice-telephony-benchmark"
        }
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": `${pageUrl}#code`,
        "name": "DestiX Voice Telephony Benchmark Harness",
        "codeRepository": "https://github.com/ayushchatgpt/destix-voice-telephony-benchmark",
        "programmingLanguage": ["Python", "TypeScript"],
        "runtimePlatform": "Node.js 20, Python 3.11"
      }
    ]
  };
}

/**
 * 5. Interactive Tools Schema Builder (WebApplication + VideoObject / SoftwareApplication)
 */
export function buildInteractiveToolGraph({
  toolSlug,
  toolName,
  toolDescription,
  applicationCategory = "BusinessApplication"
}: {
  toolSlug: string;
  toolName: string;
  toolDescription: string;
  applicationCategory?: string;
}) {
  const toolUrl = `${BASE_URL}/tools/${toolSlug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${toolUrl}#app`,
        "name": toolName,
        "url": toolUrl,
        "description": toolDescription,
        "applicationCategory": applicationCategory,
        "operatingSystem": "All modern browsers (Chrome, Safari, Firefox, Edge)",
        "browserRequirements": "Requires JavaScript and WebAudio API support",
        "author": {
          "@id": `${BASE_URL}/#person`
        },
        "provider": {
          "@id": `${BASE_URL}/#organization`
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${toolUrl}#breadcrumbs`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": toolName,
            "item": toolUrl
          }
        ]
      }
    ]
  };
}
