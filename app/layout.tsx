import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingAIBot } from "@/components/FloatingAIBot";
import { noFlashThemeScript } from "@/lib/theme";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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
  },

  // X / Twitter
  twitter: {
    card: "summary_large_image",
    title: "Webersol | AI Automation & Software Engineering",
    description:
      "Enterprise AI, intelligent automation, custom software engineering, cloud solutions, and business systems built for scale.",
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

export const viewport: Viewport = {
  // Both themes are supported (toggled via ThemeToggle / data-theme, see lib/theme.ts) —
  // this keeps browser chrome (scrollbars, form controls, mobile address bar) matching
  // whichever theme the user has active, rather than assuming dark-only.
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0F17" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-obsidian text-white antialiased flex flex-col min-h-screen relative overflow-x-hidden font-sans`}
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