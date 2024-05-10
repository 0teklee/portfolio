"use client";

import React from "react";

import { clsx } from "clsx";

import ContactSection from "@/components/organism/ContactSection";
import IntroSection from "@/components/organism/IntroSection";
import WorksSection from "@/components/organism/WorksSection";

const LandingTemplate = () => {
  return (
    <div
      className={clsx(
        `w-full h-screen px-3.5 py-8 lg:px-32 lg:py-24 2xl:px-60 scroll-hidden`,
        `overflow-y-auto snap-y snap-mandatory`,
      )}
    >
      <IntroSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
};

export default LandingTemplate;
