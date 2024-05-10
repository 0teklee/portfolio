import React, { ReactNode } from "react";

import { motion } from "framer-motion";

const SkyMotionFilter = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <motion.svg
      className="z-10 w-full h-full"
      width="400"
      height="600"
      viewBox="0 0 400 600"
      initial="hidden"
      animate="visible"
    >
      <defs>
        <linearGradient
          id="fade-gradient-horizontal"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="50%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="fade-gradient-vertical"
          x1="0%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop offset="50%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="fade-mask-horizontal">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#fade-gradient-horizontal)"
          />
        </mask>
        <mask id="fade-mask-vertical">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#fade-gradient-vertical)"
          />
        </mask>
        <filter id="cloud-texture">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.2"
            numOctaves="3"
          />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="3" />
          <feGaussianBlur stdDeviation="0.65" result="blurred" />
          <feMerge>
            <feMergeNode in="softGlowColored" />
            <feMergeNode in="blurred" />
          </feMerge>
        </filter>
      </defs>
      {children}
    </motion.svg>
  );
};

export default SkyMotionFilter;
