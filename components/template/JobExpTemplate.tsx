import React from "react";

import Image from "next/image";

import { clsx } from "clsx";

import CoinvestorRoles from "@/components/molecules/CoinvestorRoles";
import JobExpAccordion from "@/components/organism/JobExpAccordion";
import SectionItem from "@/components/organism/SectionItem";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Column from "@/components/ui/Column";
import DateText from "@/components/ui/DateText";
import Row from "@/components/ui/Row";

import { JOB_EXP_COINVESTOR } from "@/lib/constants";

const JobExpTemplate = () => {
  return (
    <Column
      classNames={`w-full h-full items-start justify-start`}
      gap={`gap-y-36`}
    >
      <Row
        classNames={clsx(
          `flex-col md:flex-row items-start justify-start`,
          `w-full sm:mb-0 sm:h-screen snap-start`,
          `scroll-my-36 xl:scroll-my-60`,
        )}
        gap={`gap-24 md:gap-12`}
      >
        <Column classNames={`w-full justify-between`} gap={`gap-y-4`}>
          <Column classNames={`w-full justify-between`} gap={`gap-y-4`}>
            <h3 className={`text-5xl font-semibold title-dot`}>BCLabs</h3>
            <DateText date={`2022.11 ~ Current`} />
          </Column>
          <Column classNames={`w-full`} gap={`gap-y-0`}>
            <JobExpAccordion />
            <CoinvestorRoles />
          </Column>
        </Column>
        <div className={`hidden lg:flex w-full items-start justify-start`}>
          <AspectRatio ratio={3 / 3.05}>
            <Image
              src={`/images/coinvestor-web.png`}
              fill={true}
              alt={`coinvestor-mobile`}
            />
          </AspectRatio>
        </div>
      </Row>
      <Column classNames={`w-full pb-12 sm:pb-0`} gap={`gap-y-36`}>
        {JOB_EXP_COINVESTOR.map((item) => (
          <SectionItem key={`job_list_item_${item.id}`} {...item} />
        ))}
      </Column>
    </Column>
  );
};

export default JobExpTemplate;
