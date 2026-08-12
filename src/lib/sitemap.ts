import { articles } from "@/data/blog";

export interface SitemapEntry {
  url: string;
  lastModified?: string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export const BASE_URL = "https://fluxtonx.com";

export function getSitemapEntries(): SitemapEntry[] {
  const currentDate = new Date().toISOString().split("T")[0];

  const staticRoutes: SitemapEntry[] = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/team`, priority: 0.95, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/solutions`, priority: 0.9, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/solutions/ai-powered-platforms`, priority: 0.85, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/solutions/enterprise-workflow-automation`, priority: 0.85, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/solutions/fintech-payment-systems`, priority: 0.85, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/solutions/mobile-app-development`, priority: 0.85, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/solutions/saas-product-engineering`, priority: 0.85, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/solutions/ui-ux-design`, priority: 0.85, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/solutions/web-platforms-dashboards`, priority: 0.85, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/about`, priority: 0.85, changeFrequency: "monthly", lastModified: currentDate },
    { url: `${BASE_URL}/case-studies`, priority: 0.85, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/case-studies/global-bank-cloud`, priority: 0.75, changeFrequency: "monthly", lastModified: currentDate },
    { url: `${BASE_URL}/case-studies/ai-supply-chain`, priority: 0.75, changeFrequency: "monthly", lastModified: currentDate },
    { url: `${BASE_URL}/case-studies/telehealth`, priority: 0.75, changeFrequency: "monthly", lastModified: currentDate },
    { url: `${BASE_URL}/case-studies/omnichannel-retail`, priority: 0.75, changeFrequency: "monthly", lastModified: currentDate },
    { url: `${BASE_URL}/case-studies/smart-grid`, priority: 0.75, changeFrequency: "monthly", lastModified: currentDate },
    { url: `${BASE_URL}/case-studies/national-security`, priority: 0.75, changeFrequency: "monthly", lastModified: currentDate },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/industries`, priority: 0.75, changeFrequency: "monthly", lastModified: currentDate },
    { url: `${BASE_URL}/industries/finance`, priority: 0.7, changeFrequency: "monthly", lastModified: currentDate },
    { url: `${BASE_URL}/careers`, priority: 0.8, changeFrequency: "weekly", lastModified: currentDate },
    { url: `${BASE_URL}/partners`, priority: 0.7, changeFrequency: "monthly", lastModified: currentDate },
    { url: `${BASE_URL}/contact`, priority: 0.9, changeFrequency: "monthly", lastModified: currentDate },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly", lastModified: currentDate },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: "yearly", lastModified: currentDate },
    { url: `${BASE_URL}/cookies`, priority: 0.3, changeFrequency: "yearly", lastModified: currentDate },
  ];

  const blogRoutes: SitemapEntry[] = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: currentDate,
  }));

  return [...staticRoutes, ...blogRoutes];
}

export function generateSitemapXml(): string {
  const entries = getSitemapEntries();
  const xmlItems = entries
    .map(
      (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority?.toFixed(2)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;
}
