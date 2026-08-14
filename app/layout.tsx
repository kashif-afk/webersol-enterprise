import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingAIBot } from "@/components/FloatingAIBot";

export const metadata: Metadata = {
  title: "Webersol | Enterprise AI & Software Engineering",
  description: "Architecting autonomous AI and high-throughput enterprise web infrastructure.",
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