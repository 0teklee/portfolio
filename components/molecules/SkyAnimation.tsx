"use client";
import React, { useState } from "react";

import { motion, useAnimation } from "framer-motion";

import SkyMotionFilter from "@/components/ui/skyMotionFilter";

const SkyAnimation: React.FC = () => {
  const initialVerticalTrail = {
    line1: { x1: 400, y1: 345, x2: -100, y2: 400 },
    line2: { x1: 400, y1: 342, x2: -100, y2: 398 },
  };
  const initialHorizontalTrail = {
    line1: { x1: 30, y1: 0, x2: 182, y2: 600 },
    line2: { x1: 40, y1: 0, x2: 185, y2: 600 },
  };

  const [verticalTrail, setVerticalTrail] = useState(initialVerticalTrail);

  const animate = useAnimation();

  const [horizontalTrail, setHorizontalTrail] = useState(
    initialHorizontalTrail,
  );

  const draw = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      transition: {
        type: "fadeOut",
        duration: 30,
      },
    },
    visible: () => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            duration: 30,
            bounce: 0,
            repeat: Infinity,
          },
        },
        ease: "linear",
      };
    },
    exit: {
      opacity: 0,
      transition: { type: "fadeOut", opacity: { duration: 5 } },
    },
  };

  const drawHorizontal = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          type: "fadeOut",
          pathLength: {
            duration: 30,
            bounce: 0,
            repeat: Infinity,
          },
        },
      };
    },
  };

  const resetAnimation = (isVertical: boolean) => {
    if (isVertical) {
      const baseY1 = Math.random() * 600;

      setVerticalTrail({
        line1: {
          ...initialVerticalTrail.line1,
          y1: baseY1,
          y2: baseY1 + 50,
        },
        line2: {
          ...initialVerticalTrail.line2,
          y1: baseY1 + 3,
          y2: baseY1 + 53,
        },
      });
    } else {
      const baseX1 = Math.random() * 400;

      setHorizontalTrail({
        line1: {
          ...initialHorizontalTrail.line1,
          x1: baseX1,
          x2: baseX1 + 150,
        },
        line2: {
          ...initialHorizontalTrail.line2,
          x1: baseX1 + 10,
          x2: baseX1 + 153,
        },
      });
    }
  };

  return (
    <div className={`relative sky-bg w-full sm:max-w-[400px] sm:max-h-[600px]`}>
      <SkyMotionFilter>
        <motion.line
          className={`sky-contrail`}
          {...verticalTrail.line1}
          stroke="#fff"
          strokeWidth={1.2}
          variants={draw}
          mask="url(#fade-mask-vertical)"
          filter="url(#cloud-texture)"
          onAnimationEnd={() => {
            resetAnimation(true);
          }}
        />
        <motion.line
          className={`sky-contrail`}
          {...verticalTrail.line2}
          stroke="#fff"
          strokeWidth={1.2}
          variants={draw}
          repeatCount={Infinity}
          mask="url(#fade-mask-vertical)"
          filter="url(#cloud-texture)"
          onAnimationEnd={() => {
            resetAnimation(true);
          }}
        />
        <motion.line
          className={`sky-contrail`}
          {...horizontalTrail.line1}
          stroke="#fff"
          strokeWidth={1.2}
          variants={drawHorizontal}
          mask="url(#fade-mask-vertical)"
          filter="url(#cloud-texture)"
          onAnimationEnd={async () => {
            await animate.start("exit");
            resetAnimation(false);
          }}
        />
        <motion.line
          className={`sky-contrail`}
          {...horizontalTrail.line2}
          stroke="#fff"
          strokeWidth={1.2}
          variants={drawHorizontal}
          mask="url(#fade-mask-vertical)"
          filter="url(#cloud-texture)"
          onAnimationEnd={() => {
            animate.start("exit");
            resetAnimation(false);
          }}
        />
      </SkyMotionFilter>
      <svg
        className={`absolute top-0 left-0 opacity-10 grayscale contrast-100`}
        viewBox="0 0 400 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export default SkyAnimation;
