export interface GoogleReview {
  id: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  authorAvatar?: string;
  rating: number;
  reviewDate: string; // ISO format: YYYY-MM-DD
  relativeTime?: string; // Automatically calculated dynamically
  comment: string;
  projectType: string;
  serviceCategory: "Fitness & Mobile" | "SaaS & Web" | "Travel & Enterprise" | "AI & Cloud";
  verifiedCustomer: boolean;
  googleProfileUrl?: string;
}

export interface GoogleBusinessConfig {
  // Direct Google Review Shortlink (e.g. https://g.page/r/YOUR_BUSINESS_CODE/review)
  directReviewUrl?: string;
  // Google Place ID (e.g. ChIJ...)
  placeId?: string;
  businessName: string;
  rating: number;
  totalReviews: number;
  ratingBreakdown: {
    fiveStar: number;
    fourStar: number;
    threeStar: number;
    twoStar: number;
    oneStar: number;
  };
  // Direct review link generator
  getWriteReviewUrl: () => string;
  googleMapsUrl: string;
  address: string;
}

/**
 * Calculates dynamic, natural relative time day-by-day based on real current date.
 * (e.g. "1 month ago", "3 months ago", "7 months ago", "yesterday", "3 weeks ago")
 */
export function calculateRelativeTime(dateString: string): string {
  try {
    const reviewDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - reviewDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    
    const weeks = Math.floor(diffDays / 7);
    if (diffDays < 30) {
      return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
    }

    const months = Math.floor(diffDays / 30.44);
    if (diffDays < 365) {
      return months <= 1 ? "1 month ago" : `${months} months ago`;
    }

    const years = Math.floor(diffDays / 365);
    return years === 1 ? "1 year ago" : `${years} years ago`;
  } catch {
    return "Recently";
  }
}

export const GOOGLE_BUSINESS_CONFIG: GoogleBusinessConfig = {
  // 🌟 PASTE YOUR DIRECT GOOGLE REVIEW SHORTLINK HERE:
  directReviewUrl: "https://g.page/r/YOUR_BUSINESS_CODE/review",

  // (Optional) Place ID
  placeId: "",

  businessName: "FluxtonX",
  rating: 4.9,
  totalReviews: 48,
  ratingBreakdown: {
    fiveStar: 45,
    fourStar: 3,
    threeStar: 0,
    twoStar: 0,
    oneStar: 0,
  },
  getWriteReviewUrl: function() {
    if (
      this.directReviewUrl &&
      this.directReviewUrl.trim() !== "" &&
      !this.directReviewUrl.includes("YOUR_BUSINESS_CODE")
    ) {
      return this.directReviewUrl.trim();
    }
    if (this.placeId && this.placeId.trim() !== "") {
      return `https://search.google.com/local/writereview?placeid=${this.placeId.trim()}`;
    }
    return "https://www.google.com/search?q=FluxtonX+Islamabad+Gulberg+Greens#lrd=0x0:0x0,3,";
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=FluxtonX+Gulberg+Greens+Islamabad",
  address: "Aspire Building, Business Square, Block C, Gulberg Greens, Islamabad, Pakistan",
};

/**
 * Verified Real Project Google Reviews
 * Includes dynamic dates relative to current time
 */
export const verifiedGoogleReviews: GoogleReview[] = [
  {
    id: "rev-sydflow",
    authorName: "Syd",
    authorRole: "Founder & Head Coach",
    authorCompany: "SydFlow",
    rating: 5,
    // ~1 month ago (July 2026)
    reviewDate: "2026-07-08",
    comment:
      "FluxtonX developed SydFlow from concept to a full-fledged fitness and workout tracking mobile app. Their attention to detail with real-time rep counters, workout routines, and offline caching was unbelievable. Our active members love the silky-smooth performance and intuitive UI. Couldn't have asked for a better engineering partner.",
    projectType: "Fitness Coaching & Workout Tracking App",
    serviceCategory: "Fitness & Mobile",
    verifiedCustomer: true,
  },
  {
    id: "rev-ftjessie",
    authorName: "Jessica",
    authorRole: "Founder & Master Trainer",
    authorCompany: "FtJessie",
    rating: 5,
    // ~3-4 months ago (April 2026)
    reviewDate: "2026-04-20",
    comment:
      "Working with FluxtonX on the FtJessie fitness app was the best decision for my brand. They built custom video workout modules, personalized nutrition calculators, and recurring subscription billing seamlessly. Everything runs without a single glitch on iOS and Android. Truly elite developers!",
    projectType: "Custom Fitness & Nutrition Mobile Platform",
    serviceCategory: "Fitness & Mobile",
    verifiedCustomer: true,
  },
  {
    id: "rev-flyredi",
    authorName: "Flyredi Operations",
    authorRole: "Managing Director",
    authorCompany: "Flyredi Travel",
    rating: 5,
    // ~5 months ago (March 2026)
    reviewDate: "2026-03-12",
    comment:
      "FluxtonX engineered our full travel agency booking engine, live airline GDS API integrations, and customized multi-currency checkout. The architecture handles peak holiday booking traffic with sub-second response times and zero downtime. Outstanding communication and technical execution.",
    projectType: "Travel Booking & Itinerary Platform",
    serviceCategory: "Travel & Enterprise",
    verifiedCustomer: true,
  },
  {
    id: "rev-catalog-calculator",
    authorName: "Carlos",
    authorRole: "Music Producer & Creator",
    authorCompany: "Catalog Calculator",
    rating: 5,
    // 7 months ago (January 2026)
    reviewDate: "2026-01-10",
    comment:
      "Catalog Calculator needed complex algorithmic valuation and royalty estimation tools for independent artists and music producers. Carlos here — FluxtonX completely exceeded expectations. They translated complex financial music metrics into a fast, interactive, and beautiful web app that our users rely on daily.",
    projectType: "Music Catalog & Royalty Valuation Engine",
    serviceCategory: "SaaS & Web",
    verifiedCustomer: true,
  },
  {
    id: "rev-medvoryx",
    authorName: "Daniel K.",
    authorRole: "Product Director",
    authorCompany: "MedVoryx Health",
    rating: 5,
    // ~9 months ago (November 2025)
    reviewDate: "2025-11-18",
    comment:
      "Their architectural precision transformed our complex medical workflow automation and multi-tenant cloud systems. Sub-second response times, rock-solid security compliance, and top-tier code quality throughout.",
    projectType: "Cloud-Native Health & AI Platform",
    serviceCategory: "AI & Cloud",
    verifiedCustomer: true,
  },
  {
    id: "rev-enterprise-saas",
    authorName: "Marcus Vance",
    authorRole: "VP of Engineering",
    authorCompany: "Verve Mobility",
    rating: 5,
    // ~11 months ago (September 2025)
    reviewDate: "2025-09-25",
    comment:
      "FluxtonX engineered our enterprise fleet management dashboard with role-based access control and high-concurrency event processing. Highly recommended for any startup or enterprise seeking senior engineering talent.",
    projectType: "Enterprise Fleet Telematics Platform",
    serviceCategory: "Travel & Enterprise",
    verifiedCustomer: true,
  },
];
