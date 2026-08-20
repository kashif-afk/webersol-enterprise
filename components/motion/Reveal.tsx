'use client';

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

export const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : delay, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
