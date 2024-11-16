"use client";

import React, { lazy, Suspense } from "react";

const LazyStarAnimation = lazy(
  () => import("@/components/molecules/StarAnimationCore"),
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
