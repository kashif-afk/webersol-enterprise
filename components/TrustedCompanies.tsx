'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const partners = [
  {
    name: 'Sadaf Amir',
    icon: (
      <img
        src="/logos/sadaf-amir.svg"
        alt="Sadaf Amir logo"
        className="h-4 w-auto invert"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Expert Care',
    icon: (
      <img
        src="/logos/expert-care.svg"
        alt="Expert Care logo"
        className="h-6 w-auto"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Luxurious Design & Build',
    icon: (
      <img
        src="/logos/luxurious-design-build.png"
        alt="Luxurious Design & Build logo"
        className="h-9 w-auto rounded object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'GlamX Beauty',
    icon: (
      <img
        src="/logos/glamx-beauty.png"
        alt="GlamX Beauty logo"
        className="h-8 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Zee Frozen Cuisine',
    icon: (
      <img
        src="/logos/zee-frozen-cuisine.png"
        alt="Zee Frozen Cuisine logo"
        className="h-9 w-auto rounded-full object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Neon Energies',
    icon: (
      <img
        src="/logos/neon-energies.png"
        alt="Neon Energies logo"
        className="h-8 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Coarix Leather',
    icon: (
      <img
        src="/logos/coarix-leather.png"
        alt="Coarix Leather logo"
        className="h-8 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Deewan Foods',
    icon: (
      <img
        src="/logos/deewan-foods.png"
        alt="Deewan Foods logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Dar-e-Arqam Schools',
    icon: (
      <img
        src="/logos/dar-e-arqam-schools.png"
        alt="Dar-e-Arqam Schools logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Pacific Packagings',
    icon: (
      <img
        src="/logos/pacific-packagings.webp"
        alt="Pacific Packagings logo"
        className="h-8 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Bloomsford Middle East',
    icon: (
      <img
        src="/logos/bloomsford-middle-east.png"
        alt="Bloomsford Middle East logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: "Cakes & Bakes",
    icon: (
      <img
        src="/logos/cakes-and-bakes.jpg"
        alt="Cakes & Bakes logo"
        className="h-8 w-auto rounded object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Middlebury Dental Center',
    icon: (
      <img
        src="/logos/middlebury-dental-center.png"
        alt="Middlebury Dental Center logo"
        className="h-8 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'National Credit Direct',
    icon: (
      <img
        src="/logos/national-credit-direct.png"
        alt="National Credit Direct logo"
        className="h-8 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: "P.F. Chang's",
    icon: (
      <img
        src="/logos/pf-changs.png"
        alt="P.F. Chang's logo"
        className="h-6 w-auto rounded object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Taaq',
    icon: (
      <img
        src="/logos/taaq.webp"
        alt="Taaq logo"
        className="h-9 w-auto rounded object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Tik Tik Technical Services',
    icon: (
      <img
        src="/logos/tik-tik-technical-services.png"
        alt="Tik Tik Technical Services logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Zee Foods',
    icon: (
      <img
        src="/logos/zee-foods.png"
        alt="Zee Foods logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Ascott',
    icon: (
      <img
        src="/logos/ascott.png"
        alt="Ascott logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Berjaya Hotels & Resorts',
    icon: (
      <img
        src="/logos/berjaya-hotels-resorts.png"
        alt="Berjaya Hotels & Resorts logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Millennium Hotels & Resorts',
    icon: (
      <img
        src="/logos/millennium-hotels-resorts.png"
        alt="Millennium Hotels & Resorts logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Dorsett Hotels & Resorts',
    icon: (
      <img
        src="/logos/dorsett-hotels-resorts.png"
        alt="Dorsett Hotels & Resorts logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Lexis Hotel Group',
    icon: (
      <img
        src="/logos/lexis-hotel-group.png"
        alt="Lexis Hotel Group logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Mercure Hotels',
    icon: (
      <img
        src="/logos/mercure-hotels.png"
        alt="Mercure Hotels logo"
        className="h-9 w-auto rounded object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Gypto Pharma',
    icon: (
      <img
        src="/logos/gypto-pharma.png"
        alt="Gypto Pharma logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Destinations Connect',
    icon: (
      <img
        src="/logos/destinations-connect.png"
        alt="Destinations Connect logo"
        className="h-8 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Texas LED Signage',
    icon: (
      <img
        src="/logos/texas-led-signage.png"
        alt="Texas LED Signage logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
  {
    name: 'Universal Holidays',
    icon: (
      <img
        src="/logos/universal-holidays.png"
        alt="Universal Holidays logo"
        className="h-9 w-auto bg-white rounded p-1 object-contain"
      />
    ),
    badge: 'Valued Client',
  },
];

export const TrustedCompanies = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 bg-obsidian border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 mb-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
          Trusted by Innovative Engineering Teams & Global Standards
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Gradient masks for smooth fade edges */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 shrink-0 items-center min-w-full"
          animate={reduceMotion ? { x: '0%' } : { x: ['0%', '-50%'] }}
          transition={reduceMotion ? { duration: 0 } : { repeat: Infinity, duration: 180, ease: 'linear' }}
        >
          {/* Repeat the set enough times to fill both halves at any viewport width, then duplicate
              that filled sequence once for a seamless loop; everything past the first repeat is
              decorative for screen readers */}
          {(() => {
            const repeated = Array(3).fill(partners).flat();
            return [...repeated, ...repeated];
          })().map((partner, index) => {
            const isDuplicate = index >= 3 * partners.length;
            return (
              <div
                key={index}
                aria-hidden={isDuplicate ? true : undefined}
                className="flex items-center gap-3.5 px-6 py-3.5 rounded-xl border border-slate-800/80 bg-slateGraphite/30 backdrop-blur-md shrink-0 hover:border-slate-700 transition-colors"
              >
                <div className="p-2 rounded-lg bg-steel/10 border border-steel/20 text-steelBright">
                  {partner.icon}
                </div>
                <div>
                  <span className="text-sm font-bold text-white tracking-wide block">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    {partner.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};