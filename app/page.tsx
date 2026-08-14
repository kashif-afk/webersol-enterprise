import React from "react";
import { DynamicHero } from "../components/DynamicHero";
import { ServiceSwitcher } from "../components/ServiceSwitcher";
import { InteractiveEstimator } from "../components/InteractiveEstimator";
import { CaseStudyShowcase } from "../components/CaseStudyShowcase";
import { TrustedCompanies } from "../components/TrustedCompanies";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-obsidian)]">
      <DynamicHero />
      <ServiceSwitcher />
      <InteractiveEstimator />
      <CaseStudyShowcase />
      <TrustedCompanies />
      <ContactSection />
    </main>
  );
}