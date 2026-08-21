'use client';

import React, { useId } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type OrbitItem = { icon: LucideIcon; label: string };

type Props = {
  centerIcon: LucideIcon;
  items: OrbitItem[];
  color?: string;
  accent?: string;
  size?: number;
};

export const SignatureOrbit = ({ centerIcon: CenterIcon, items, color = '#2B84AD', accent = '#F5920D', size = 300 }: Props) => {
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/[:]/g, '');
  const cx = size / 2;
  const cy = size / 2;
  const rx = (size / 2) * 0.82;
  const ry = rx * 0.5;
  const nodeSize = size * 0.15;
  const duration = 16;
  const pathId = `orbit-path-${uid}`;
  const glowId = `orbit-glow-${uid}`;
  const pathD = `M ${cx + rx},${cy} A ${rx},${ry} 0 1,1 ${cx - rx},${cy} A ${rx},${ry} 0 1,1 ${cx + rx},${cy}`;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
      <defs>
        <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path id={pathId} d={pathD} fill="none" stroke={color} strokeOpacity={0.28} strokeWidth={1} />

      {items.map((item, i) => {
        const Icon = item.icon;
        const badge = (
          <foreignObject x={-nodeSize / 2} y={-nodeSize / 2} width={nodeSize} height={nodeSize}>
            <div
              className="flex items-center justify-center h-full w-full rounded-full border"
              style={{ background: 'rgba(11,17,27,0.9)', borderColor: `${color}55` }}
            >
              <Icon style={{ width: nodeSize * 0.5, height: nodeSize * 0.5, color: accent }} />
            </div>
          </foreignObject>
        );

        if (!reduceMotion) {
          const beginOffset = (i / items.length) * duration;
          return (
            <g key={item.label} filter={`url(#${glowId})`}>
              <animateMotion dur={`${duration}s`} begin={`-${beginOffset}s`} repeatCount="indefinite">
                <mpath href={`#${pathId}`} />
              </animateMotion>
              {badge}
            </g>
          );
        }

        const angle = (i / items.length) * 2 * Math.PI;
        const ex = cx + rx * Math.cos(angle);
        const ey = cy + ry * Math.sin(angle);
        return (
          <g key={item.label} transform={`translate(${ex}, ${ey})`} filter={`url(#${glowId})`}>
            {badge}
          </g>
        );
      })}

      {/* Nucleus */}
      <circle cx={cx} cy={cy} r={size * 0.135} fill="rgba(11,17,27,0.9)" stroke={accent} strokeWidth={1.5} filter={`url(#${glowId})`} />
      <foreignObject x={cx - size * 0.09} y={cy - size * 0.09} width={size * 0.18} height={size * 0.18}>
        <div className="flex items-center justify-center h-full w-full">
          <CenterIcon style={{ width: '55%', height: '55%', color: accent }} />
        </div>
      </foreignObject>
    </svg>
  );
};
