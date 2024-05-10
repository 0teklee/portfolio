"use client";

import React, { ReactNode, useEffect } from "react";

import { clsx } from "clsx";
import { useInView } from "react-intersection-observer";

import Row from "@/components/ui/Row";

const SectionScrollContainer = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode | ReactNode[];
}) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log(id, inView);
  }, [inView]);

  return (
    <section
      id={id}
      ref={ref}
      className={clsx(
        `w-full h-screen `,
        `transition-opacity duration-1000 ease-in-out`,
        inView ? `opacity-100` : `opacity-0`,
      )}
    >
      <Row
        classNames={clsx(
          `flex-col`,
          `md:flex-row items-stretch sm:justify-between`,
          `w-full`,
        )}
        gap={`gap-20`}
      >
        {children}
      </Row>
    </section>
  );
};

export default SectionScrollContainer;
