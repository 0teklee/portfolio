import React from "react";

import SectionDescription from "@/components/molecules/SectionDescription";
import SectionImageCarousel from "@/components/molecules/SectionImageCarousel";
import SectionScrollContainer from "@/components/molecules/SectionScrollContainer";

interface IProjectDetailPage {
  id: string;
  motivation: string;
  title: string;
  date: string;
  images: { src: string; caption: string }[];
  learning?: string[];
  description: string;
}

const ProjectDetailPage = ({
  id,
  title,
  learning,
  images,
  date,
  description,
  motivation,
}: IProjectDetailPage) => {
  return (
    <SectionScrollContainer id={id}>
      <SectionDescription
        {...{ title, date, description, motivation, learning }}
      />
      <SectionImageCarousel images={images} />
    </SectionScrollContainer>
  );
};

export default ProjectDetailPage;
