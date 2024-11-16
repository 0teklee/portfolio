"use client";

import React, { Suspense } from "react";

import dynamic from "next/dynamic";

const LazyStarAnimation = dynamic(
  () => import("@/components/molecules/StarAnimationCore"),
  { ssr: false },
);

const LoadingPlaceholder = () => (
  <div className="relative w-[200px] h-[300px]  lg:w-[400px] lg:h-[600px] bg-black" />
);

const StarAnimation = () => {
  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <LazyStarAnimation />
    </Suspense>
  );
};

export default StarAnimation;
