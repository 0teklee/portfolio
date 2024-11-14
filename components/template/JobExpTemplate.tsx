import React from "react";

import Image from "next/image";

import ProjectRoles from "@/components/molecules/ProjectRoles";
import ProjectsList from "@/components/molecules/ProjectsList";
import SectionItem from "@/components/organism/SectionItem";
import WorkSectionHeader from "@/components/organism/WorkSectionHeaders";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Column from "@/components/ui/Column";

import { JOB_EXP_COINVESTOR_LINKS, JOB_ROLES } from "@/lib/constants";
import { JOB_EXP_COINVESTOR } from "@/lib/job-post-constants";

const JobExpTemplate = () => {
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
        {JOB_EXP_COINVESTOR.map((item) => (
          <SectionItem key={`job_list_item_${item.id}`} {...item} />
        ))}
      </Column>
    </Column>
  );
};

export default JobExpTemplate;
