"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { clsx } from "clsx";
import { useInView } from "react-intersection-observer";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Column from "@/components/ui/Column";
import Row from "@/components/ui/Row";

const WorksSection = () => {
  const { ref, inView } = useInView();
  return (
    <section
      id={`works`}
      ref={ref}
      className={clsx(
        `h-screen snap-start`,
        `lg:flex items-center`,
        `pt-24 pb-12 lg:pt-36`,
        `transition-opacity duration-1000 ease-in-out`,
        inView ? "opacity-100" : "opacity-0",
      )}
    >
      <Column
        classNames={clsx(
          `flex-1`,
          `justify-between sm:flex-row items-end sm:items-start sm:justify-start`,
        )}
        gap={`gap-12`}
      >
        <Column classNames={`w-full`} gap={`gap-y-20`}>
          <h1 className={`text-5xl font-semibold title-dot`}>Works</h1>
          <Column classNames={`w-full`} gap={`gap-y-12`}>
            <Link
              href={`/works/job-experience`}
              className={`cursor-pointer hover:underline`}
            >
              <Row
                classNames={`flex-col lg:flex-row w-fit items-start lg:items-center justify-start`}
              >
                <h2
                  className={`text-2xl sm:text-4xl font-semibold text-blue-500`}
                >
                  Professional
                </h2>
                <h2 className={`text-2xl sm:text-4xl font-semibold`}>
                  Experience
                </h2>
              </Row>
            </Link>
            <Link
              href={`/works/personal-projects`}
              className={`cursor-pointer hover:underline`}
            >
              <Row
                classNames={`flex-col lg:flex-row w-full items-start lg:items-center justify-start`}
              >
                <h2 className={`text-2xl sm:text-4xl font-semibold`}>
                  Personal
                </h2>
                <h2
                  className={`text-2xl sm:text-4xl font-semibold text-blue-500`}
                >
                  Project
                </h2>
              </Row>
            </Link>
          </Column>
        </Column>
        <div
          className={clsx(
            `w-full max-w-[100px] sm:max-w-none  lg:max-w-[400px]`,
          )}
        >
          <AspectRatio ratio={2 / 3}>
            <Image
              fill={true}
              src={`/images/img179.jpg`}
              alt={`work-section-img`}
            />
          </AspectRatio>
        </div>
      </Column>
    </section>
  );
};

export default WorksSection;
