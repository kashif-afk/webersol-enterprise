'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = { color?: string; accent?: string; size?: number };

const LAYERS = [
  { topW: 0.9, botW: 0.65, y: 0.05, h: 0.22 },
  { topW: 0.65, botW: 0.4, y: 0.3, h: 0.22 },
  { topW: 0.4, botW: 0.18, y: 0.55, h: 0.22 },
];

export const Funnel = ({ color = '#2B84AD', accent = '#F5920D', size = 140 }: Props) => {
  const reduceMotion = useReducedMotion();

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
      {LAYERS.map((l, i) => {
        const topW = l.topW * size;
        const botW = l.botW * size;
        const y = l.y * size;
        const h = l.h * size;
        const cx = size / 2;
        const isLast = i === LAYERS.length - 1;
        const points = `${cx - topW / 2},${y} ${cx + topW / 2},${y} ${cx + botW / 2},${y + h} ${cx - botW / 2},${y + h}`;
        return (
          <polygon
            key={i}
            points={points}
            fill={isLast ? accent : color}
            fillOpacity={0.18 + i * 0.12}
            stroke={isLast ? accent : color}
            strokeOpacity={0.5}
          />
        );
      })}
      {!reduceMotion &&
        [0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={size / 2}
            r={2.5}
            fill={accent}
            initial={{ cy: size * 0.08, opacity: 0 }}
            animate={{ cy: [size * 0.08, size * 0.85], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6, ease: 'easeIn' }}
          />
        ))}
    </svg>
  );
};
