import React from "react";

import { useLocale, useTranslations } from "next-intl";

import ProjectRoles from "@/components/molecules/ProjectRoles";
import ProjectsList from "@/components/molecules/ProjectsList";
import SectionImageCarousel from "@/components/molecules/SectionImageCarousel";
import SectionItem from "@/components/organism/SectionItem";
import WorkSectionHeader from "@/components/organism/WorkSectionHeaders";
import Column from "@/components/ui/Column";

import { PERSONAL_LINKS, PERSONAL_ROLES } from "@/lib/constants";
import { PERSONAL_PROJECTS_COVERS } from "@/lib/personal-post-contstants";

const PersonalProjectTemplate = () => {
  const locale = useLocale();
  const t = useTranslations(`${locale}.personal`);

  // Get project IDs from the translation structure
  const projectIds = Object.keys(t.raw("projects"));
  const processIds = Object.keys(t.raw("processes"));

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
      {projectIds.map((projectId, index) => {
        const processId = processIds.find((item) => item.includes(projectId));
        return (
          <React.Fragment key={`project_${projectId}`}>
            <SectionItem
              id={`projects.${projectId}`}
              translationNamespace={`${locale}.personal`}
            />
            {processId && (
              <SectionItem
                id={`processes.${processId}`}
                translationNamespace={`${locale}.personal`}
              />
            )}
          </React.Fragment>
        );
      })}
    </Column>
  );
};

export default PersonalProjectTemplate;
