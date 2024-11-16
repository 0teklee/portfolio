"use client";

import React, { useEffect, useRef } from "react";

import p5 from "p5";
import { useInView } from "react-intersection-observer";

import { Line } from "@/lib/p5/line";
import { settings } from "@/lib/p5/star";
import { cn } from "@/lib/utils";

const SkyP5 = () => {
  const containerRef = useRef(null);
  const { inView } = useInView();

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let lines: Line[] = [];

      p.setup = () => {
        p.createCanvas(400, 600);
        p.strokeWeight(1);
        p.noFill();
      };

      p.draw = () => {
        p.background(settings.background);

        if (p.frameCount % 60 === 0 && lines.length < 10) {
          lines.push(new Line(p));
        }

        lines.forEach((line) => {
          line.move();
          line.display();
        });

        lines = lines.filter((line) => !line.isDead());
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);
    return () => p5Instance.remove();
  }, []);

  return (
    <>
      {inView ? null : (
        <div
          ref={containerRef}
          className={cn(
            "absolute left-0 top-1/3",
            "sm:relative sm:top-0",
            "w-full h-full relative",
          )}
        />
      )}
    </>
  );
};

export default SkyP5;
