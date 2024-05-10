import React from "react";

import { clsx } from "clsx";

import SkyAnimation from "@/components/molecules/SkyAnimation";
import Column from "@/components/ui/Column";

const IntroSection = () => {
  return (
    <section
      className={`relative h-screen snap-start pt-24 lg:flex items-center`}
    >
      <Column
        classNames={`sm:flex-row w-full items-start`}
        gap={`gap-y-4 sm:gap-y-0`}
      >
        <header className={clsx(`w-full transit-appear`)}>
          <Column classNames={`w-full items-start`} gap={`gap-y-2`}>
            <h1
              className={`text-5xl font-bold after:content-["."] after:text-blue-500`}
            >
              Frontend DEV
            </h1>
            <h3 className={`text-3xl font-semibold`}>LEE TEKWOO</h3>
            <h2 className={`text-4xl font-semibold text-blue-500`}>
              PORTFOLIO
            </h2>
          </Column>
        </header>
        <div
          className={clsx(
            `w-full max-w-[300px] sm:max-w-none lg:max-w-[400px]`,
            `pt-12 sm:pt-0 self-end`,
          )}
        >
          <SkyAnimation />
        </div>
      </Column>
    </section>
  );
};

export default IntroSection;
