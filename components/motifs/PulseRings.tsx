'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = { color?: string; accent?: string; size?: number };

export const PulseRings = ({ color = '#2B84AD', accent = '#F5920D', size = 140 }: Props) => {
  const reduceMotion = useReducedMotion();
  const rings = [0, 1, 2];

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {rings.map((i) => (
        <motion.span
          key={i}
          className="absolute rounded-full border"
          style={{
            width: size * 0.4,
            height: size * 0.4,
            borderColor: i === 2 ? accent : color,
            borderWidth: 1.5,
          }}
          animate={
            reduceMotion
              ? { opacity: 0.35, scale: 1 + i * 0.3 }
              : { scale: [1, 2.1], opacity: [0.6, 0] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 2.6, repeat: Infinity, ease: 'easeOut', delay: i * 0.8 }
          }
        />
      ))}
      <div
        className="relative h-3 w-3 rounded-full"
        style={{ backgroundColor: accent, boxShadow: `0 0 12px ${accent}` }}
      />
    </div>
  );
};
