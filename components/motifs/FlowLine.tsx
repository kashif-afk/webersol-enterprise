'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = { color?: string; accent?: string; size?: number };

export const FlowLine = ({ color = '#2B84AD', accent = '#F5920D', size = 140 }: Props) => {
  const reduceMotion = useReducedMotion();
  const path = `M 8 ${size * 0.7} Q ${size * 0.3} ${size * 0.2} ${size * 0.55} ${size * 0.5} T ${size - 8} ${size * 0.3}`;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
      <path d={path} fill="none" stroke={color} strokeOpacity={0.3} strokeWidth={2} strokeLinecap="round" />
      <motion.path
        d={path}
        fill="none"
        stroke={accent}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeDasharray="10 130"
        animate={reduceMotion ? undefined : { strokeDashoffset: [0, -140] }}
        transition={reduceMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: 'linear' }}
      />
      <circle cx={8} cy={size * 0.7} r={4} fill={color} />
      <circle cx={size - 8} cy={size * 0.3} r={4} fill={accent} />
    </svg>
  );
};
