import React from "react";

import SectionImageCarousel from "@/components/molecules/SectionImageCarousel";
import SectionScrollContainer from "@/components/molecules/SectionScrollContainer";
import SectionTextContent from "@/components/molecules/SectionTextContent";

interface IJobExpItem {
  id: string;
  title: string;
  images: { src: string; caption: string }[];
  contribution: string[];
  date: string;
  learning?: string[];
  description?: string;
}

const WorkSectionItem = ({
  id,
  title,
  date,
  images,
  contribution,
  learning,
  description,
}: IJobExpItem) => (
  <SectionScrollContainer id={id}>
    <SectionTextContent
      {...{ title, date, description, contribution, learning }}
    />
    <SectionImageCarousel images={images} />
  </SectionScrollContainer>
);

export default WorkSectionItem;
