import React, { useState, useEffect } from "react";
import { Star, ShieldCheck, ExternalLink, PenSquare, Award, CheckCircle2, RefreshCw } from "lucide-react";
import { verifiedGoogleReviews, GOOGLE_BUSINESS_CONFIG, GoogleReview, calculateRelativeTime } from "@/data/reviews";
import { WriteGoogleReviewModal } from "@/components/WriteGoogleReviewModal";
import { fetchLiveGoogleReviews, LiveGooglePlaceResponse } from "@/lib/google-places";

export function GoogleReviewsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [reviewsData, setReviewsData] = useState<LiveGooglePlaceResponse>({
    rating: GOOGLE_BUSINESS_CONFIG.rating,
    totalReviews: GOOGLE_BUSINESS_CONFIG.totalReviews,
    reviews: verifiedGoogleReviews,
    isLive: false,
    source: "verified_dataset",
  });

  useEffect(() => {
    // Attempt automatic real-time sync with Google Places API
    fetchLiveGoogleReviews()
      .then((res) => {
        if (res && res.reviews && res.reviews.length > 0) {
          setReviewsData(res);
        }
      })
      .catch((err) => {
        console.warn("Using offline verified reviews fallback:", err);
      });
  }, []);

  const categories = ["All", "Fitness & Mobile", "SaaS & Web", "Travel & Enterprise", "AI & Cloud"];

  const currentReviews = reviewsData.reviews;
  const filteredReviews = activeCategory === "All"
    ? currentReviews
    : currentReviews.filter((r) => r.serviceCategory === activeCategory || reviewsData.isLive);

  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28 border-y border-border">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Card with Official Google Business Profile Branding */}
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-card">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Overall Rating & Google Logo */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border pb-8 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-3">
                {/* Official Google G Logo */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md border border-gray-100">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-foreground">Google Verified Business</span>
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-xs text-muted-foreground">FluxtonX Software & AI Solutions</p>
                </div>
              </div>

              {/* Big Star Summary */}
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-black text-foreground tracking-tight">
                  {GOOGLE_BUSINESS_CONFIG.rating.toFixed(1)}
                </span>
                <div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-5 w-5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    Based on <span className="text-foreground font-bold">{GOOGLE_BUSINESS_CONFIG.totalReviews}+ reviews</span> on Google
                  </p>
                </div>
              </div>

              {/* Progress bars */}
              <div className="mt-6 space-y-1.5 text-xs text-muted-foreground max-w-xs">
                <div className="flex items-center gap-2">
                  <span className="w-12">5 stars</span>
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-[#FBBC05] rounded-full w-[94%]" />
                  </div>
                  <span className="w-8 text-right font-medium">94%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-12">4 stars</span>
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-[#FBBC05] rounded-full w-[6%]" />
                  </div>
                  <span className="w-8 text-right font-medium">6%</span>
                </div>
              </div>
            </div>

            {/* Right: Pitch & CTA */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  <Award className="h-3.5 w-3.5" /> 98% Client Satisfaction Rate
                </span>
                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  Rated 4.9/5 by Global CTOs, Founders & Enterprise Leaders
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Real feedback from enterprises and startups that scale mission-critical software, SaaS platforms, and AI systems with FluxtonX.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary-dark transition duration-200"
                >
                  <PenSquare className="h-4 w-4" /> Review Us on Google
                </button>
                <a
                  href={GOOGLE_BUSINESS_CONFIG.getWriteReviewUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition duration-200"
                >
                  Open Google Profile <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span>Showing {filteredReviews.length} Verified Google Reviews</span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      <WriteGoogleReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group">
      <div>
        {/* Top bar with Google verification tag & stars */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
            ))}
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
            {/* Google Icon */}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{calculateRelativeTime(review.reviewDate)}</span>
          </div>
        </div>

        {/* Project Tag */}
        <span className="inline-block rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent mb-3">
          {review.projectType}
        </span>

        {/* Review Quote */}
        <p className="text-sm leading-relaxed text-foreground/90 font-normal">
          "{review.comment}"
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {review.authorAvatar ? (
            <img
              src={review.authorAvatar}
              alt={review.authorName}
              className="h-10 w-10 rounded-full object-cover border border-border shadow-xs"
              loading="lazy"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent text-white font-bold text-xs shadow-sm">
              {getInitials(review.authorName)}
            </div>
          )}
          <div>
            <div className="flex items-center gap-1">
              <h4 className="text-xs font-bold text-foreground">{review.authorName}</h4>
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" title="Verified Customer" />
            </div>
            <p className="text-[11px] text-muted-foreground">
              {review.authorRole} • <span className="text-foreground font-medium">{review.authorCompany}</span>
            </p>
          </div>
        </div>

        {review.googleProfileUrl && (
          <a
            href={review.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition p-1"
            title="View on Google"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
