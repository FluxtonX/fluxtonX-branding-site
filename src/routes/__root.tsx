import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

<<<<<<< HEAD
=======
import appCss from "../styles.css?url";
import logoUrl from "../assets/fluxtonx-logo.webp?url";
import {
  createOrganizationSchema,
  createWebSiteSchema,
  createLocalBusinessSchema,
  PRIMARY_KEYWORDS,
} from "../lib/seo";

>>>>>>> 99384a0bb6003f46667c6572a6e43a8221752d0f
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
<<<<<<< HEAD
=======
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FluxtonX | Enterprise Software Engineering & AI Solutions Company" },
      { name: "description", content: "FluxtonX is a high-performance product engineering and AI solutions company. We specialize in custom software development, enterprise web & mobile apps, full-stack SaaS engineering, and intelligent cloud systems." },
      { name: "keywords", content: PRIMARY_KEYWORDS.join(", ") },
      { name: "author", content: "FluxtonX" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "google-site-verification", content: "google9de9162b955f95e6" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { name: "geo.position", content: "33.6007;73.1369" },
      { name: "ICBM", content: "33.6007, 73.1369" },
      { property: "og:title", content: "FluxtonX | Enterprise Software Engineering & AI Solutions Company" },
      { property: "og:description", content: "FluxtonX delivers custom software development, full-stack SaaS engineering, mobile app development, and cloud & AI solutions for global enterprises." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "FluxtonX" },
      { property: "og:url", content: "https://fluxtonx.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@fluxtonx" },
      { name: "twitter:title", content: "FluxtonX | Enterprise Software Engineering & AI Solutions Company" },
      { name: "twitter:description", content: "FluxtonX delivers custom software development, full-stack SaaS engineering, mobile app development, and cloud & AI solutions for global enterprises." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/41807d71-beae-4f92-a736-5b80b85dede3/id-preview-e6a31462--60dc2ceb-24f0-4137-a7dd-d52fb8ca7d53.lovable.app-1778239690490.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/41807d71-beae-4f92-a736-5b80b85dede3/id-preview-e6a31462--60dc2ceb-24f0-4137-a7dd-d52fb8ca7d53.lovable.app-1778239690490.png" },
    ],
    links: [
      { rel: "canonical", href: "https://fluxtonx.com" },
      { rel: "icon", href: logoUrl },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(createOrganizationSchema()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(createLocalBusinessSchema()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(createWebSiteSchema()),
      },
    ],
  }),
  shellComponent: RootShell,
>>>>>>> 99384a0bb6003f46667c6572a6e43a8221752d0f
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

