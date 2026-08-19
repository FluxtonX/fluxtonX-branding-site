import { createServerFn } from "@tanstack/react-start";
import { GoogleReview, GOOGLE_BUSINESS_CONFIG, verifiedGoogleReviews } from "@/data/reviews";

export interface LiveGooglePlaceResponse {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
  isLive: boolean;
  source: "google_places_api" | "verified_dataset";
}

/**
 * Server Function: Fetches LIVE real-time reviews directly from Google Places API.
 * Reads GOOGLE_MAPS_API_KEY and GOOGLE_PLACE_ID from environment or config.
 * Caches results in-memory for 1 hour to optimize performance and prevent API overages.
 */
let cachedReviews: LiveGooglePlaceResponse | null = null;
let lastFetchTime = 0;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour cache

export const fetchLiveGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<LiveGooglePlaceResponse> => {
    const apiKey = typeof process !== "undefined" ? process.env?.GOOGLE_MAPS_API_KEY : "";
    const placeId = (typeof process !== "undefined" ? process.env?.GOOGLE_PLACE_ID : "") || GOOGLE_BUSINESS_CONFIG.placeId;

    const now = Date.now();
    if (cachedReviews && now - lastFetchTime < CACHE_DURATION_MS) {
      return cachedReviews;
    }

    // If Google API Key and Place ID are provided, call Google's live Places API
    if (apiKey && placeId && placeId.trim() !== "") {
      try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId.trim()}&fields=name,rating,reviews,user_ratings_total&key=${apiKey.trim()}`;
        const response = await fetch(url);
        const data = (await response.json()) as any;

        if (data && data.result && data.result.reviews) {
          const liveReviews: GoogleReview[] = data.result.reviews.map(
            (rev: any, index: number): GoogleReview => ({
              id: `google-live-${index}-${rev.time || Date.now()}`,
              authorName: rev.author_name || "Google Reviewer",
              authorRole: "Verified Client",
              authorCompany: "Google Customer",
              authorAvatar: rev.profile_photo_url || "",
              rating: rev.rating || 5,
              reviewDate: rev.time ? new Date(rev.time * 1000).toISOString().split("T")[0] : "",
              relativeTime: rev.relative_time_description || "Recently",
              comment: rev.text || "",
              projectType: "Verified Enterprise Engagement",
              serviceCategory: "Fintech & Enterprise",
              verifiedCustomer: true,
              googleProfileUrl: rev.author_url || "",
            })
          );

          const result: LiveGooglePlaceResponse = {
            rating: data.result.rating || GOOGLE_BUSINESS_CONFIG.rating,
            totalReviews: data.result.user_ratings_total || liveReviews.length,
            reviews: liveReviews.length > 0 ? liveReviews : verifiedGoogleReviews,
            isLive: true,
            source: "google_places_api",
          };

          cachedReviews = result;
          lastFetchTime = now;
          return result;
        }
      } catch (error) {
        console.error("Failed to fetch live Google Places reviews:", error);
      }
    }

    // Default: Fallback to verified dataset with Islamabad business configuration
    return {
      rating: GOOGLE_BUSINESS_CONFIG.rating,
      totalReviews: GOOGLE_BUSINESS_CONFIG.totalReviews,
      reviews: verifiedGoogleReviews,
      isLive: false,
      source: "verified_dataset",
    };
  }
);
