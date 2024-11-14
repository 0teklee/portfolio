import React from "react";

import {clsx} from "clsx";

import SectionImageCarousel from "@/components/molecules/SectionImageCarousel";
import SectionScrollContainer from "@/components/molecules/SectionScrollContainer";
import SectionTextContent from "@/components/molecules/SectionTextContent";
import Column from "@/components/ui/Column";
import DateText from "@/components/ui/DateText";
import Row from "@/components/ui/Row";

interface IJobExpItem {
  id: string;
  title: string;
  images: { src: string; caption: string }[];
  contribution?: string[];
  date: string;
  learning?: string[];
  description?: string;
  motivation?: string;
}

const SectionItem = ({
  id,
  title,
  date,
  images,
  contribution,
  learning,
  description,
  motivation,
}: IJobExpItem) => (
  <SectionScrollContainer id={id}>
    <Column classNames={`w-full justify-start`} gap={`gap-y-1.5`}>
      <h1
        className={`mb-4 text-5xl font-semibold scroll-my-24 xl:scroll-my-36 lg:snap-start title-dot`}
      >
        {title}
      </h1>
      <DateText date={date} />
    </Column>
    <Row
      classNames={clsx(
        `flex-col-reverse`,
        `lg:flex-row items-stretch lg:justify-between`,
        `w-full`,
      )}
      gap={`gap-20`}
    >
      <SectionTextContent
        {...{ title, date, description, contribution, learning, motivation }}
      />
      <SectionImageCarousel images={images} />
    </Row>
  </SectionScrollContainer>
);

export default SectionItem;
