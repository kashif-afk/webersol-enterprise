import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  icon: LucideIcon;
  tone?: 'steel' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
};

const TONES = {
  steel: {
    wrap: 'border-steel/20 bg-steel/10 text-steelBright',
    glow: 'bg-steelBright/20',
    drop: 'drop-shadow-[0_0_6px_rgba(79,179,222,0.8)]',
  },
  amber: {
    wrap: 'border-amber/20 bg-amber/10 text-amber',
    glow: 'bg-amber/25',
    drop: 'drop-shadow-[0_0_6px_rgba(245,146,13,0.8)]',
  },
};

const SIZES = {
  sm: { box: 'h-9 w-9', icon: 'h-4 w-4' },
  md: { box: 'h-11 w-11', icon: 'h-5 w-5' },
};

export const GlowIcon = ({ icon: Icon, tone = 'steel', size = 'md', className }: Props) => {
  const t = TONES[tone];
  const s = SIZES[size];

  return (
    <div className={cn('relative flex shrink-0 items-center justify-center rounded-xl border', t.wrap, s.box, className)}>
      <span className={cn('absolute inset-0 rounded-xl blur-md', t.glow)} aria-hidden="true" />
      <Icon className={cn('relative', s.icon, t.drop)} />
    </div>
  );
};
