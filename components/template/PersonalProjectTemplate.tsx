import React from "react";

import ProjectDetailPage from "@/components/organism/ProjectDetailPage";
import WorkSectionItem from "@/components/organism/WorkSectionItem";
import Column from "@/components/ui/Column";

import { PERSONAL_PROJECTS, PROJECTS_PAGES } from "@/lib/constants";

const PersonalProjectTemplate = () => {
  return (
    <Column gap={`gap-y-0`}>
      {PERSONAL_PROJECTS.map((item, index) => (
        <>
          <WorkSectionItem key={`job_list_item_${item.id}`} {...item} />
          {<ProjectDetailPage {...PROJECTS_PAGES[index]} />}
        </>
      ))}
    </Column>
  );
};

export default PersonalProjectTemplate;
