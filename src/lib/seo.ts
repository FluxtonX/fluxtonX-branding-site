import { TeamMember } from "@/data/team";

export const SITE_URL = "https://fluxtonx.com";
export const SITE_NAME = "FluxtonX";
export const DEFAULT_OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/41807d71-beae-4f92-a736-5b80b85dede3/id-preview-e6a31462--60dc2ceb-24f0-4137-a7dd-d52fb8ca7d53.lovable.app-1778239690490.png";

export const PRIMARY_KEYWORDS = [
  "FluxtonX",
  "FluxtonX Software",
  "FluxtonX Solutions",
  "Custom Software Development Agency",
  "Enterprise Web & Mobile App Development",
  "Full-Stack SaaS Engineering",
  "Cloud & AI Software Solutions",
  "Muhammad Nasir FluxtonX",
  "Muhammad Mudassir",
  "Muhammad Mudassir FluxtonX",
  "MedVoryx Founder",
  "Afnan Fahim",
  "Afnan Fahim Full Stack Developer",
  "Umar Sadiq",
  "Umar Sadiq Flutter Developer",
  "Software Engineering Islamabad",
  "Vite React AI Engineering",
  "Flutter Mobile Development",
];

export interface SeoMetaOptions {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

export function createCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath === "/" ? SITE_URL : `${SITE_URL}${cleanPath}`;
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${SITE_URL}#organization`,
    name: "FluxtonX",
    alternateName: [
      "FluxtonX Software",
      "FluxtonX Solutions",
      "FluxtonX Technologies",
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/assets/fluxtonx-logo.webp`,
    foundingDate: "2021",
    description:
      "FluxtonX is a premier product engineering and AI solutions company specializing in scalable SaaS, enterprise web & mobile apps, and custom digital transformation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aspire Building, Business Square, Block C, Gulberg Greens",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/team#muhammad-nasir`,
      name: "Muhammad Nasir",
      jobTitle: "CEO & Founder",
      sameAs: "https://www.linkedin.com/in/muhammad-nasir-970926177/",
    },
    employee: [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/team#muhammad-mudassir`,
        name: "Muhammad Mudassir",
        jobTitle: "Full-Stack Software Architect & Lead Engineer",
        description:
          "Founder of MedVoryx and Lead Full-Stack Architect at FluxtonX, architecting high-scale cloud platforms, AI systems, and enterprise web solutions.",
        sameAs: [
          "https://www.linkedin.com/in/muhammad-mudassir5/",
          "https://github.com/muhammadmudassir",
          "https://medvoryx.com",
        ],
        founder: {
          "@type": "Organization",
          name: "MedVoryx",
          url: "https://medvoryx.com",
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/team#obaid-ullah`,
        name: "Obaid Ullah",
        jobTitle: "Senior Full-Stack Web Developer",
        sameAs: "https://www.linkedin.com/in/obaid-ullah-b01835266/",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/team#afnan-fahim`,
        name: "Afnan Fahim",
        jobTitle: "Senior Software Engineer",
        description:
          "Mobile Product Builder | Mobile Platform Engineer | Started as a Full Stack Mobile Engineer now I build companies with the same code | Co-Founder & CEO @ Wextrum | 10+ Yrs helping startups scale",
        sameAs: [
          "https://www.linkedin.com/in/afnan-fahim/",
          "https://github.com/Afnan-Fahim",
          "https://afnan-portfolio-6076b.web.app/",
        ],
        founder: {
          "@type": "Organization",
          name: "Wextrum",
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/team#umar-sadiq`,
        name: "Umar Sadiq",
        jobTitle: "Senior Flutter & Mobile Developer",
        sameAs: [
          "https://github.com/Umarsadiq112233",
          "https://portfolio-fc84f.firebaseapp.com/",
        ],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/team#rahmat-u`,
        name: "Rahmat U",
        jobTitle: "Lead UI/UX Product Designer",
        sameAs: "https://www.linkedin.com/in/rahmat-u-9a63b1243/",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/team#ikramudin`,
        name: "Ikramudin",
        jobTitle: "Lead Mobile Application Developer",
        sameAs: "https://www.linkedin.com/in/ikramudin/",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/team#aziz-ur-rehman`,
        name: "Aziz Ur Rehman",
        jobTitle: "Senior Flutter & Mobile Developer",
        sameAs: "https://www.linkedin.com/in/aziz-ur-rehman-a37b22241/",
      },
    ],
    sameAs: [
      "https://linkedin.com/company/fluxtonx",
      "https://twitter.com/fluxtonx",
      "https://github.com/fluxtonx",
      "https://facebook.com/fluxtonx",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${SITE_URL}/contact`,
    },
  };
}

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: "FluxtonX",
    description:
      "Enterprise Web & Mobile App Development, Full-Stack SaaS Engineering, Cloud & AI Software Solutions.",
    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
  };
}

export function createPersonSchema(member: TeamMember) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/team#${member.id}`,
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    image: `${SITE_URL}/assets/${member.id}.webp`,
    url: `${SITE_URL}/team#${member.id}`,
    worksFor: {
      "@type": "Organization",
      name: "FluxtonX",
      url: SITE_URL,
    },
    knowsAbout: member.skills,
    sameAs: [
      member.linkedin,
      member.github,
      member.website,
    ].filter(Boolean),
  };

  if (member.venture) {
    schema.founder = {
      "@type": "Organization",
      name: member.venture.name,
      url: member.venture.url || undefined,
    };
  }

  return schema;
}

export function createTeamCollectionSchema(members: TeamMember[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/team#collection`,
    url: `${SITE_URL}/team`,
    name: "FluxtonX Engineering & Leadership Team",
    description:
      "Meet the software architects, AI engineers, and product designers behind FluxtonX and innovative ventures like MedVoryx.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: members.map((m, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: createPersonSchema(m),
      })),
    },
  };
}

export function createBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function createServiceSchema(service: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "FluxtonX",
      url: SITE_URL,
    },
    url: createCanonicalUrl(service.path),
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#localbusiness`,
    name: "FluxtonX",
    alternateName: [
      "FluxtonX Software",
      "FluxtonX Solutions",
      "FluxtonX Technologies",
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/assets/fluxtonx-logo.webp`,
    image: `${SITE_URL}/assets/fluxtonx-logo.webp`,
    telephone: "+92 51 234 5678",
    email: "contact@fluxtonx.com",
    priceRange: "$$$$",
    currenciesAccepted: "USD, EUR, GBP, PKR",
    paymentAccepted: "Wire Transfer, Credit Card, Stripe, Crypto",
    description:
      "FluxtonX is a premier product engineering and AI solutions company specializing in scalable SaaS, enterprise web & mobile apps, and custom digital transformation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aspire Building, Business Square, Block C, Gulberg Greens",
      addressLocality: "Islamabad",
      addressRegion: "Federal Capital",
      postalCode: "44000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.6007,
      longitude: 73.1369,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Worldwide" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Pakistan" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "48",
      reviewCount: "48",
    },
    sameAs: [
      "https://linkedin.com/company/fluxtonx",
      "https://twitter.com/fluxtonx",
      "https://github.com/fluxtonx",
      "https://facebook.com/fluxtonx",
    ],
  };
}

export function createFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createArticleSchema(article: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  authorName: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: createCanonicalUrl(article.path),
    image: article.image || DEFAULT_OG_IMAGE,
    datePublished: article.datePublished || "2024-10-01",
    author: {
      "@type": "Person",
      name: article.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "FluxtonX",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/fluxtonx-logo.webp`,
      },
    },
  };
}

export function getSeoMeta(options: SeoMetaOptions) {
  const canonical = createCanonicalUrl(options.canonicalPath || "");
  const image = options.ogImage || DEFAULT_OG_IMAGE;
  const allKeywords = Array.from(
    new Set([...PRIMARY_KEYWORDS, ...(options.keywords || [])])
  ).join(", ");

  const scripts: Array<Record<string, any>> = [];

  if (options.jsonLd) {
    const jsonLdList = Array.isArray(options.jsonLd)
      ? options.jsonLd
      : [options.jsonLd];

    jsonLdList.forEach((schema) => {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      });
    });
  }

  return {
    meta: [
      { title: options.title },
      { name: "description", content: options.description },
      { name: "keywords", content: allKeywords },
      { name: "author", content: "FluxtonX" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { name: "geo.position", content: "33.6007;73.1369" },
      { name: "ICBM", content: "33.6007, 73.1369" },
      { property: "og:title", content: options.title },
      { property: "og:description", content: options.description },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: options.ogType || "website" },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: options.title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@fluxtonx" },
      { name: "twitter:title", content: options.title },
      { name: "twitter:description", content: options.description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: canonical },
    ],
    scripts,
  };
}
