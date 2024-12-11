import React from "react";

import { clsx } from "clsx";
import { useTranslations } from "next-intl";

import SectionImageCarousel from "@/components/molecules/SectionImageCarousel";
import SectionScrollContainer from "@/components/molecules/SectionScrollContainer";
import SectionTextContent from "@/components/molecules/SectionTextContent";
import Row from "@/components/ui/Row";

interface ISectionItemProps {
  id: string;
  translationNamespace: string;
}

const SectionItem = ({ id, translationNamespace }: ISectionItemProps) => {
  const t = useTranslations(translationNamespace);
  const { title, date, images, description, motivation, contribution, link } =
    t.raw(id);

  return (
    <SectionScrollContainer id={id.split(".").pop() || ""}>
      <Row
        classNames={clsx(
          `relative flex-col`,
          `lg:flex-row items-stretch lg:justify-between`,
          `w-full`,
        )}
        gap={`gap-20`}
      >
        <SectionTextContent
          title={title}
          date={date}
          description={description}
          contribution={contribution}
          motivation={motivation}
          link={link}
        />
        <SectionImageCarousel images={images} />
      </Row>
    </SectionScrollContainer>
  );
};

export default SectionItem;
