import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
        className="bg-[var(--color-obsidian)] text-white antialiased flex flex-col min-h-screen relative"
      >
       
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}