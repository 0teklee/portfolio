"use client";

import React, { ReactNode } from "react";

import { clsx } from "clsx";
import { useInView } from "react-intersection-observer";

const SectionScrollContainer = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode | ReactNode[];
}) => {
  const { ref, inView } = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={clsx(
        `w-full  h-auto sm:h-screen `,
        `transition-opacity duration-1000 ease-in-out`,
        inView ? `opacity-100` : `opacity-0`,
      )}
    >
      {children}
    </section>
  );
};

export default SectionScrollContainer;
