import React from "react";

import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";

import ProjectRoles from "@/components/molecules/ProjectRoles";
import ProjectsList from "@/components/molecules/ProjectsList";
import SectionItem from "@/components/organism/SectionItem";
import WorkSectionHeader from "@/components/organism/WorkSectionHeaders";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Column from "@/components/ui/Column";

import { JOB_EXP_COINVESTOR_LINKS, JOB_ROLES } from "@/lib/constants";

const JobExpTemplate = () => {
  const locale = useLocale();
  const t = useTranslations(`${locale}`);
  const projectIds = Object.keys(t.raw("job"));

  return (
    <Column
      classNames={`w-full h-full items-start justify-start`}
      gap={`gap-y-36`}
    >
      <WorkSectionHeader title="BCLabs" period="2022.11 ~ 2024.07">
        <WorkSectionHeader.Content>
          <ProjectsList projectList={JOB_EXP_COINVESTOR_LINKS} />
          <ProjectRoles roles={JOB_ROLES} />
        </WorkSectionHeader.Content>
        <WorkSectionHeader.Media>
          <AspectRatio ratio={3 / 3.05}>
            <Image
              src="/images/coinvestor-web.png"
              fill={true}
              alt="coinvestor-mobile"
            />
          </AspectRatio>
        </WorkSectionHeader.Media>
      </WorkSectionHeader>
      <Column classNames={`w-full pb-12 sm:pb-0`} gap={`gap-y-36`}>
        {projectIds.map((projectId) => (
          <SectionItem
            key={`job_list_projectId_${projectId}`}
            id={`${projectId}`}
            translationNamespace={`${locale}.job`}
          />
        ))}
      </Column>
    </Column>
  );
};

export default JobExpTemplate;
