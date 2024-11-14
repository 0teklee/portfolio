import React from "react";

import Image from "next/image";

import ProjectRoles from "@/components/molecules/ProjectRoles";
import ProjectsList from "@/components/molecules/ProjectsList";
import SectionItem from "@/components/organism/SectionItem";
import WorkSectionHeader from "@/components/organism/WorkSectionHeaders";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Column from "@/components/ui/Column";

import { PERSONAL_LINKS, PERSONAL_ROLES } from "@/lib/constants";
import {
  PERSONAL_PROCESSES,
  PERSONAL_PROJECTS,
} from "@/lib/personal-post-contstants";

const PersonalProjectTemplate = () => {
  return (
    <Column classNames={`flex`} gap={`gap-y-12 lg:gap-y-0`}>
      <WorkSectionHeader title="Personal Projects" period="2022.08 ~ Current">
        <WorkSectionHeader.Content>
          <ProjectsList projectList={PERSONAL_LINKS} title={`3+ Projects`} />
          <ProjectRoles roles={PERSONAL_ROLES} />
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
      {PERSONAL_PROJECTS.map((item, index) => (
        <React.Fragment key={`job_list_item_${item.id}`}>
          <SectionItem {...item} contributionTitle={`Achievement`} />
          <SectionItem {...PERSONAL_PROCESSES[index]} />
        </React.Fragment>
      ))}
    </Column>
  );
};

export default PersonalProjectTemplate;
