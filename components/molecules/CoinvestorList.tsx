import React from "react";

import Link from "next/link";

import Column from "@/components/ui/Column";
import Row from "@/components/ui/Row";

import { cn } from "@/lib/utils";

const CoinvestorList = () => {
  return (
    <Column classNames="w-full" gap={`gap-y-0`}>
      <Link href="/works/job-experience#coinvestor_earn">
        <Row
          classNames={cn(
            `group cursor-pointer`,
            `justify-between items-center w-full px-3 py-3`,
            `border-b border-gray-200`,
            `text-md font-medium`,
            `hover:text-blue-500`,
            `transition-all duration-200 ease-in-out`,
          )}
        >
          <p>Earn</p>
          <p>2024.02 ~ Current</p>
        </Row>
      </Link>
      <Link href="/works/job-experience#coinvestor_quant">
        <Row
          classNames={cn(
            `group cursor-pointer`,
            `justify-between items-center w-full px-3 py-3`,
            `border-b border-gray-200`,
            `text-md font-medium`,
            `hover:text-blue-500`,
            `transition-all duration-200 ease-in-out`,
          )}
        >
          <p>Quant</p>
          <p>2023.01 ~ Current</p>
        </Row>
      </Link>
      <Link href="/works/job-experience#coinvestor_ui_library">
        <Row
          classNames={cn(
            `group cursor-pointer`,
            `justify-between items-center w-full px-3 py-3`,
            `border-b border-gray-200`,
            `text-md font-medium`,
            `hover:text-blue-500`,
            `transition-all duration-200 ease-in-out`,
          )}
        >
          <p>BCLabs UI Library</p>
          <p>2022.11 ~ 2023.03</p>
        </Row>
      </Link>
      <Link href="/works/job-experience#coinvestor_rebranding">
        <Row
          classNames={cn(
            `group cursor-pointer`,
            `justify-between items-center w-full px-3 py-3`,
            `border-b border-gray-200`,
            `text-md font-medium`,
            `hover:text-blue-500`,
            `transition-all duration-200 ease-in-out`,
          )}
        >
          <p>Coinvestor Rebranding</p>
          <p>2022.11 ~ 2023.03</p>
        </Row>
      </Link>
      <Link href="/works/job-experience#team-collab_contribution">
        <Row
          classNames={cn(
            `group cursor-pointer`,
            `justify-between items-center w-full px-3 py-3`,
            `text-md font-medium`,
            `hover:text-blue-500`,
            `transition-all duration-200 ease-in-out`,
          )}
        >
          <p>Team Collaboration / Contribution</p>
        </Row>
      </Link>
    </Column>
  );
};

export default CoinvestorList;
