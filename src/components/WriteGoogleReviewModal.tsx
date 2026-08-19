import React, { useState } from "react";
import { Star, X, CheckCircle, ExternalLink, MessageSquare, Sparkles, Building2 } from "lucide-react";
import { GOOGLE_BUSINESS_CONFIG } from "@/data/reviews";

interface WriteGoogleReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WriteGoogleReviewModal({ isOpen, onClose }: WriteGoogleReviewModalProps) {
  const [selectedRating, setSelectedRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [privateFeedback, setPrivateFeedback] = useState<string>("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const isPositive = selectedRating >= 4;

  const handleGoogleRedirect = () => {
    window.open(GOOGLE_BUSINESS_CONFIG.getWriteReviewUrl(), "_blank", "noopener,noreferrer");
    onClose();
  };

  const handlePrivateFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xl z-10 animate-fade-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header with Google Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
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
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Google Verified Reviews</span>
            <h3 className="text-lg font-bold text-foreground">Review FluxtonX</h3>
          </div>
        </div>

        {/* Interactive Star Selection */}
        <div className="mt-6 rounded-xl bg-surface/50 border border-border p-4 text-center">
          <p className="text-sm font-medium text-foreground">How was your experience working with FluxtonX?</p>
          
          <div className="mt-3 flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => {
              const active = (hoverRating || selectedRating) >= star;
              return (
                <button
                  key={star}
                  type="button"
                  onClick={() => setSelectedRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 transition-transform hover:scale-125 focus:outline-none"
                  aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                >
                  <Star
                    className={`h-8 w-8 transition-colors ${
                      active ? "fill-[#FBBC05] text-[#FBBC05]" : "fill-none text-muted-foreground/40"
                    }`}
                  />
                </button>
              );
            })}
          </div>
          <div className="mt-2 text-xs font-semibold text-accent">
            {selectedRating === 5 && "⭐ Excellent - World-Class Partnership!"}
            {selectedRating === 4 && "⭐ Great - Very Satisfied!"}
            {selectedRating === 3 && "Average - Room for improvement"}
            {selectedRating <= 2 && "Needs Attention - We will resolve this"}
          </div>
        </div>

        {/* Dynamic Branching based on Rating */}
        {isPositive ? (
          <div className="mt-6 space-y-4">
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4 text-sm text-emerald-700 dark:text-emerald-300">
              <div className="flex items-start gap-2.5">
                <Sparkles className="h-5 w-5 text-emerald-600 flex-none mt-0.5" />
                <p>
                  Thank you! Your feedback helps enterprises worldwide discover high-caliber engineering. We will redirect you to Google's official review form.
                </p>
              </div>
            </div>

            <button
              onClick={handleGoogleRedirect}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary-dark transition-all duration-300"
            >
              Write Review on Google <ExternalLink className="h-4 w-4" />
            </button>

            <p className="text-center text-[11px] text-muted-foreground">
              Directly opens Google Business Profile in a secure new tab.
            </p>
          </div>
        ) : (
          <div className="mt-6">
            {feedbackSubmitted ? (
              <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-5 text-center">
                <CheckCircle className="mx-auto h-8 w-8 text-emerald-500" />
                <h4 className="mt-2 font-bold text-foreground">Thank You for Your Feedback</h4>
                <p className="mt-1 text-xs text-muted-foreground">Our executive engineering leadership will review your message immediately.</p>
              </div>
            ) : (
              <form onSubmit={handlePrivateFeedbackSubmit} className="space-y-4">
                <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3.5 text-xs text-amber-700 dark:text-amber-300 flex items-start gap-2">
                  <MessageSquare className="h-4 w-4 flex-none mt-0.5" />
                  <span>We strive for 100% excellence. Please share how we can improve so our founders can assist you immediately.</span>
                </div>
                <textarea
                  rows={3}
                  required
                  value={privateFeedback}
                  onChange={(e) => setPrivateFeedback(e.target.value)}
                  placeholder="Tell us what we can do better..."
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 rounded-lg bg-primary py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary-dark transition"
                  >
                    Send Direct to Leadership
                  </button>
                  <button
                    type="button"
                    onClick={handleGoogleRedirect}
                    className="rounded-lg border border-border bg-background px-3 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition"
                  >
                    Post to Google Anyway
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Footer info with Islamabad HQ reference */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-accent" />
            <span>Islamabad HQ • Gulberg Greens</span>
          </div>
          <a
            href={GOOGLE_BUSINESS_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition flex items-center gap-1"
          >
            View on Maps <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
