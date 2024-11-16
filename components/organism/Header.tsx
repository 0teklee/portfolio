"use client";

import React from "react";

import Link from "next/link";

import { clsx } from "clsx";

import LanguageSelector from "@/components/molecules/LanguageSelector";
import Row from "@/components/ui/Row";

const Header = () => {
  return (
    <Row
      classNames={clsx(
        `fixed top-0 justify-between`,
        `w-screen px-3.5 py-8 lg:px-32 lg:px-32 lg:py-12`,
        `font-medium text-lg z-50`,
      )}
    >
      <Link href={`/`}>
        <h1
          className={`text-2xl  transition-colors hover:text-blue-500 hover:underline`}
        >
          Lee Tekwoo
        </h1>
      </Link>
      <Row gap={`gap-3`}>
        <Link href={`/#works`}>
          <h1
            className={`text-lg  transition-colors hover:text-blue-500 hover:underline`}
          >
            Works
          </h1>
        </Link>
        <Link href={`/#contacts`}>
          <h1
            className={`text-lg  transition-colors hover:text-blue-500 hover:underline`}
          >
            Contacts
          </h1>
        </Link>
        <LanguageSelector />
      </Row>
    </Row>
  );
};

export default Header;
