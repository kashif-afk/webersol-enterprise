'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = { color?: string; accent?: string; size?: number };

const HEIGHTS = [0.35, 0.55, 0.4, 0.75, 0.95];

export const ClimbingBars = ({ color = '#2B84AD', accent = '#F5920D', size = 140 }: Props) => {
  const reduceMotion = useReducedMotion();
  const barWidth = size / (HEIGHTS.length * 2);

  return (
    <div className="flex items-end gap-2" style={{ width: size, height: size }}>
      {HEIGHTS.map((h, i) => {
        const isLast = i === HEIGHTS.length - 1;
        const maxHeight = size * h;
        return (
          <motion.div
            key={i}
            className="rounded-t-sm"
            style={{ width: barWidth, backgroundColor: isLast ? accent : color }}
            initial={{ height: reduceMotion ? maxHeight : 6 }}
            animate={{ height: maxHeight }}
            transition={{ duration: 0.8, delay: reduceMotion ? 0 : i * 0.12, ease: 'easeOut' }}
          />
        );
      })}
    </div>
  );
};
