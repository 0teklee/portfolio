import React from "react";

import ProjectRoles from "@/components/molecules/ProjectRoles";
import ProjectsList from "@/components/molecules/ProjectsList";
import SectionImageCarousel from "@/components/molecules/SectionImageCarousel";
import SectionItem from "@/components/organism/SectionItem";
import WorkSectionHeader from "@/components/organism/WorkSectionHeaders";
import Column from "@/components/ui/Column";

import { PERSONAL_LINKS, PERSONAL_ROLES } from "@/lib/constants";
import {
  PERSONAL_PROCESSES,
  PERSONAL_PROJECTS,
  PERSONAL_PROJECTS_COVERS,
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
          <SectionImageCarousel images={PERSONAL_PROJECTS_COVERS} />
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
