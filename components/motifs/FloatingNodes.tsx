'use client';

import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = { color?: string; accent?: string; size?: number };

const NODE_LAYOUT = [
  { x: 0.5, y: 0.15 },
  { x: 0.18, y: 0.4 },
  { x: 0.82, y: 0.4 },
  { x: 0.3, y: 0.78 },
  { x: 0.7, y: 0.78 },
];

export const FloatingNodes = ({ color = '#2B84AD', accent = '#F5920D', size = 140 }: Props) => {
  const reduceMotion = useReducedMotion();
  const points = useMemo(() => NODE_LAYOUT.map((n) => ({ x: n.x * size, y: n.y * size })), [size]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
      {points.slice(1).map((p, i) => (
        <line key={i} x1={points[0].x} y1={points[0].y} x2={p.x} y2={p.y} stroke={color} strokeOpacity={0.35} strokeWidth={1} />
      ))}
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          r={i === 0 ? 5 : 3.5}
          fill={i === 0 ? accent : color}
          initial={{ cy: p.y, opacity: 0.85 }}
          animate={reduceMotion ? { cy: p.y, opacity: 0.85 } : { cy: [p.y, p.y - 4, p.y], opacity: [0.85, 1, 0.85] }}
          transition={reduceMotion ? undefined : { duration: 2.4 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
};
