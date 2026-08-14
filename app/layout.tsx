import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingAIBot } from "@/components/FloatingAIBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://webersol.com"),

  // Primary SEO title
  title: {
    default: "Webersol | AI Automation &  Digital Solutions",
    template: "%s | Webersol",
  },

  // Primary search-engine description
  description:
    "Webersol delivers AI automation, custom digital solutions, enterprise AI solutions, cloud platforms, and intelligent business systems that help companies scale.",

  applicationName: "Webersol",

  category: "technology",

  keywords: [
    "AI automation",
    "AI automation company",
    "enterprise AI solutions",
    "AI agents",
    "generative AI",
    "AI software development",
    "custom software development",
    "software engineering company",
    "enterprise software development",
    "business process automation",
    "workflow automation",
    "AI integration",
    "cloud solutions",
    "cloud architecture",
    "financial software",
    "ERP software development",
    "AI search optimization",
    "generative engine optimization",
    "GEO services",
    "Webersol",
  ],

  authors: [
    {
      name: "Webersol",
      url: "https://webersol.com",
    },
  ],

  creator: "Webersol",
  publisher: "Webersol",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Search/social preview
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webersol.com",
    siteName: "Webersol",
    title: "Webersol | AI Automation & Software Engineering",
    description:
      "Enterprise AI, intelligent automation, custom software engineering, cloud solutions, and business systems built for scale.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webersol - AI Automation & Software Engineering",
      },
    ],
  },

  // X / Twitter
  twitter: {
    card: "summary_large_image",
    title: "Webersol | AI Automation & Software Engineering",
    description:
      "Enterprise AI, intelligent automation, custom software engineering, cloud solutions, and business systems built for scale.",
    images: ["/og-image.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://webersol.com",
  },

  // Browser / device behavior
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-[var(--color-obsidian)] text-white antialiased flex flex-col min-h-screen relative overflow-x-hidden"
      >
        <Header />

        <main className="flex-1 w-full relative">
          {children}
        </main>

        <Footer />

        {/* Persistent Floating AI Bot Assistant */}
        <FloatingAIBot />
      </body>
    </html>
  );
}