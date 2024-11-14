import React from "react";

import LinkItem from "@/components/atom/NavLinkItems";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Column from "@/components/ui/Column";

import { IProjectListItem } from "@/lib/types";

const ProjectsList = ({
  projectList,
  title = "Projects",
}: {
  projectList: IProjectListItem[];
  title?: string;
}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="coinvestor">
        <AccordionTrigger>
          <p className="pb-2 text-xl">{title}</p>
        </AccordionTrigger>
        <AccordionContent>
          <Column classNames="w-full here?" gap={`gap-y-0`}>
            <div className={`[&>*:last-child>div]:border-b-0`}>
              {projectList.map((experience) => (
                <LinkItem
                  key={experience.href}
                  href={experience.href}
                  title={experience.title}
                  dateRange={experience.dateRange}
                  className={`or here?`}
                />
              ))}
            </div>
          </Column>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProjectsList;
