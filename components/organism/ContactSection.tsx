"use client";

import React from "react";

import Link from "next/link";

import { clsx } from "clsx";
import { useLocale, useTranslations } from "next-intl";

import Column from "@/components/ui/Column";
import Row from "@/components/ui/Row";

const ContactSection = () => {
  const t = useTranslations("contacts");
  const locale = useLocale();
  const isEn = locale.includes("en");

  return (
    <section
      id={`contacts`}
      className={clsx(`h-screen pt-24 snap-end`, "motion-safe:animate-in-view")}
    >
      <Column classNames={`w-full`} gap={`gap-y-6 sm:gap-y-20`}>
        <h1 className={`text-5xl font-semibold title-dot`}>Contacts</h1>
        <Column classNames={`w-full`} gap={`gap-y-6 sm:gap-y-12`}>
          <Row
            classNames={`flex-col lg:flex-row w-fit items-start lg:items-center justify-start`}
          >
            <h2 className={`text-2xl sm:text-3xl font-medium`}>Github</h2>
            <Link
              className={`text-2xl sm:text-3xl font-semibold hover:underline  hover:text-blue-500`}
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
              className={`text-2xl sm:text-3xl font-semibold hover:underline hover:text-blue-500`}
              href={`https://0teklee.github.io/resume${isEn ? "/en" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("resume")}
            </Link>
          </Row>
          <Row
            classNames={`flex-col lg:flex-row w-fit items-start lg:items-center justify-start`}
          >
            <h2 className={`text-2xl sm:text-3xl font-medium`}>CV</h2>
            <Link
              className={`text-2xl sm:text-3xl font-semibold hover:underline hover:text-blue-500`}
              href={`https://0teklee.github.io/resume/${isEn ? "/en/" : ""}cv.html`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("cv")}
            </Link>
          </Row>
          <Row
            classNames={`flex-col lg:flex-row w-fit items-start lg:items-center justify-start`}
          >
            <h2 className={`text-2xl sm:text-3xl font-medium`}>Blog</h2>
            <Link
              className={`text-2xl sm:text-3xl font-semibold hover:underline  hover:text-blue-500`}
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
          </Row>{" "}
          <Row
            classNames={`flex-col lg:flex-row w-fit items-start lg:items-center justify-start`}
          >
            <h2 className={`text-xl sm:text-3xl font-medium`}>LinkedIn</h2>
            <Link
              className={`text-2xl sm:text-3xl font-semibold hover:underline  hover:text-blue-500`}
              href={`www.linkedin.com/in/tekwoo-lee-a67913171`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lee Tekwoo
            </Link>
          </Row>
        </Column>
      </Column>
    </section>
  );
};

export default ContactSection;
