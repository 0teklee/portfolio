"use client";

import React, { useCallback, useEffect, useRef } from "react";

import p5 from "p5";

import { settings, Star } from "@/lib/p5/star";

const StarAnimationCore = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);
  const starsRef = useRef<Star[]>([]);
  const isAnimatingRef = useRef(true);

  const sketch = useCallback((p: p5) => {
    let rafId: number;

    const createStars = (count: number) => {
      const stars: Star[] = [];
      for (let i = 0; i < count; i++) {
        stars.push(new Star(p, settings.size.width / 2));
      }
      return stars;
    };

    p.setup = () => {
      const canvas = p.createCanvas(settings.size.width, settings.size.height);
      canvas.parent(containerRef.current!);
      starsRef.current = createStars(settings.starCounts);
    };

    const animate = () => {
      if (!isAnimatingRef.current) return;

      p.background(30, 10);

      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];
        star.update();
        star.draw();
      }

      rafId = requestAnimationFrame(animate);
    };

    p.draw = () => {
      // Stop p5's internal animation loop
      p.noLoop();
      // Start our optimized animation loop
      animate();
    };

    return () => {
      cancelAnimationFrame(rafId);
      isAnimatingRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    isAnimatingRef.current = true;
    p5InstanceRef.current = new p5(sketch);

    return () => {
      if (p5InstanceRef.current) {
        isAnimatingRef.current = false;
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
      starsRef.current = [];
    };
  }, [sketch]);

  return (
    <div
      ref={containerRef}
      className="relative w-full sm:max-w-[400px] sm:max-h-[600px]"
    />
  );
};

export default StarAnimationCore;
