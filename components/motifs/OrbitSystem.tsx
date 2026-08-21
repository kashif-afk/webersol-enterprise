'use client';

import React from 'react';
import { useReducedMotion } from 'framer-motion';

type Props = { color?: string; accent?: string; size?: number };

const ORBITS = [
  { tilt: 0, duration: 9, electrons: 3 },
  { tilt: 60, duration: 12, electrons: 3 },
  { tilt: 120, duration: 15, electrons: 3 },
];

export const OrbitSystem = ({ color = '#2B84AD', accent = '#F5920D', size = 260 }: Props) => {
  const reduceMotion = useReducedMotion();
  const cx = size / 2;
  const cy = size / 2;
  const rx = (size / 2) * 0.78;
  const ry = rx * 0.34;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
      <defs>
        <filter id="orbit-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {ORBITS.map((orbit, orbitIndex) => {
        const pathId = `orbit-path-${orbitIndex}`;
        const pathD = `M ${cx + rx},${cy} A ${rx},${ry} 0 1,1 ${cx - rx},${cy} A ${rx},${ry} 0 1,1 ${cx + rx},${cy}`;
        const electronColor = orbitIndex === 1 ? accent : color;

        return (
          <g key={orbitIndex} transform={`rotate(${orbit.tilt} ${cx} ${cy})`}>
            <path id={pathId} d={pathD} fill="none" stroke={color} strokeOpacity={0.28} strokeWidth={1} />

            {Array.from({ length: orbit.electrons }).map((_, electronIndex) => {
              if (!reduceMotion) {
                const beginOffset = (electronIndex / orbit.electrons) * orbit.duration;
                return (
                  <circle key={electronIndex} r={4} fill={electronColor} filter="url(#orbit-glow)">
                    <animateMotion dur={`${orbit.duration}s`} begin={`-${beginOffset}s`} repeatCount="indefinite">
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                );
              }

              // Static fallback: place each electron at its resting angle along the
              // (unrotated, local) ellipse — the parent <g>'s rotate() handles the tilt.
              const angle = (electronIndex / orbit.electrons) * 2 * Math.PI;
              const ex = cx + rx * Math.cos(angle);
              const ey = cy + ry * Math.sin(angle);
              return <circle key={electronIndex} cx={ex} cy={ey} r={4} fill={electronColor} filter="url(#orbit-glow)" />;
            })}
          </g>
        );
      })}

      {/* Nucleus */}
      <circle cx={cx} cy={cy} r={10} fill={accent} filter="url(#orbit-glow)" />
      <circle cx={cx} cy={cy} r={4} fill="#FFE4B8" />
    </svg>
  );
};
