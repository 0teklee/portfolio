"use client";

import React, { ReactNode } from "react";

import { clsx } from "clsx";

const SectionScrollContainer = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <section
      id={id}
      className={clsx(
        `w-full h-auto lg:h-screen`,
        "motion-safe:animate-in-view",
      )}
    >
      {children}
    </section>
  );
};

export default SectionScrollContainer;
