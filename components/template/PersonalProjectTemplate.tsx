import React from "react";

import SectionItem from "@/components/organism/SectionItem";
import Column from "@/components/ui/Column";

import { PERSONAL_PROJECTS, PROJECTS_PAGES } from "@/lib/constants";

const PersonalProjectTemplate = () => {
  return (
    <Column classNames={`block sm:flex`} gap={`sm:gap-y-0`}>
      {PERSONAL_PROJECTS.map((item, index) => (
        <React.Fragment key={`job_list_item_${item.id}`}>
          <SectionItem {...item} />
          <SectionItem {...PROJECTS_PAGES[index]} />
        </React.Fragment>
      ))}
    </Column>
  );
};

export default PersonalProjectTemplate;
