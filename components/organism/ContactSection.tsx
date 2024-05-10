"use client";

import React from "react";

import Link from "next/link";

import { clsx } from "clsx";
import { useInView } from "react-intersection-observer";

import Column from "@/components/ui/Column";
import Row from "@/components/ui/Row";

const ContactSection = () => {
  const { ref, inView } = useInView();
  return (
    <section
      id={`contacts`}
      ref={ref}
      className={clsx(
        `h-screen pt-24 snap-end`,
        `transition-opacity duration-1000 ease-in-out`,
        inView ? "opacity-100" : "opacity-0",
      )}
    >
      <Column classNames={`w-full`} gap={`gap-y-6 sm:gap-y-20`}>
        <h1 className={`text-5xl font-semibold title-dot`}>Contacts</h1>
        <Column classNames={`w-full`} gap={`gap-y-6 sm:gap-y-12`}>
          <Row
            classNames={`flex-col lg:flex-row w-fit items-start lg:items-center justify-start`}
          >
            <h2 className={`text-2xl sm:text-3xl font-medium`}>Github</h2>
            <Link
              className={`text-2xl sm:text-3xl font-semibold hover:underline transition-all hover:text-blue-500`}
              href={`https://github.com/0teklee`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @0teklee
            </Link>
          </Row>
          <Row
            classNames={`flex-col lg:flex-row w-fit items-start lg:items-center justify-start`}
          >
            <h2 className={`text-2xl sm:text-3xl font-medium`}>Resume</h2>
            <Link
              className={`text-2xl sm:text-3xl font-semibold hover:underline transition-all hover:text-blue-500`}
              href={`https://0teklee.github.io/resume`}
              target="_blank"
              rel="noopener noreferrer"
            >
              FE 이택우 이력서 (KR)
            </Link>
          </Row>
          <Row
            classNames={`flex-col lg:flex-row w-fit items-start lg:items-center justify-start`}
          >
            <h2 className={`text-2xl sm:text-3xl font-medium`}>CV</h2>
            <Link
              className={`text-2xl sm:text-3xl font-semibold hover:underline transition-all hover:text-blue-500`}
              href={`https://0teklee.github.io/resume/cv.html`}
              target="_blank"
              rel="noopener noreferrer"
            >
              FE 이택우 경력 기술서
            </Link>
          </Row>
          <Row
            classNames={`flex-col lg:flex-row w-fit items-start lg:items-center justify-start`}
          >
            <h2 className={`text-2xl sm:text-3xl font-medium`}>Blog</h2>
            <Link
              className={`text-2xl sm:text-3xl font-semibold hover:underline transition-all hover:text-blue-500`}
              href={`https://teklog.site`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Teklog
            </Link>
          </Row>
          <Row
            classNames={`flex-col lg:flex-row w-fit items-start lg:items-center justify-start`}
          >
            <h2 className={`text-xl sm:text-3xl font-medium`}>Email</h2>
            <p className={`text-xl`}>leetekwoo@gmail.com</p>
          </Row>
        </Column>
      </Column>
    </section>
  );
};

export default ContactSection;
