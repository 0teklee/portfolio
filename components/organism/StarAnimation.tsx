"use client";

import React from "react";

import dynamic from "next/dynamic";

const LoadingPlaceholder = () => (
  <div className="relative w-[200px] h-[300px]  lg:w-[400px] lg:h-[600px] bg-black" />
);

const StarAnimationCore = dynamic(
  () => import("@/components/molecules/StarAnimationCore"),
  {
    ssr: false,
    loading: LoadingPlaceholder,
  },
);

const StarAnimation = () => <StarAnimationCore />;

export default StarAnimation;
