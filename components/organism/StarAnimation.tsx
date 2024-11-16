"use client";

import React, { Suspense } from "react";

import dynamic from "next/dynamic";

const LoadingPlaceholder = () => (
  <div className="relative w-[200px] h-[300px]  lg:w-[400px] lg:h-[600px] bg-black" />
);

const StarAnimationCore = dynamic(
  () => import("@/components/molecules/StarAnimationCore"),
  { ssr: false, loading: () => <LoadingPlaceholder /> },
);

const StarAnimation = () => {
  return (
    <Suspense>
      <StarAnimationCore />
    </Suspense>
  );
};

export default StarAnimation;
