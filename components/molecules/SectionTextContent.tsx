import React from "react";

import Column from "@/components/ui/Column";

import { ISectionItem } from "@/lib/types";

interface ISectionTextContent
  extends Pick<ISectionItem, "description" | "learning" | "motivation"> {
  contribution?: string[];
  contributionTitle?: string;
}

const SectionTextContent = ({
  description,
  contribution = [],
  learning,
  motivation,
  contributionTitle = "Contribution",
}: ISectionTextContent) => {
  return (
    <Column
      classNames={`flex-1 relative top-[10%] pt-8 pb-12`}
      gap={`gap-y-20`}
    >
      <Column classNames={`w-full`} gap={`gap-y-12`}>
        {description && (
          <p
            className={`indent-4 whitespace-pre-wrap leading-6 xl:max-w-xl xl:leading-7 xl:text-lg`}
          >
            {description}
          </p>
        )}
        {contribution.length > 0 && (
          <Column classNames={`w-full`} gap={`gap-y-3`}>
            <h2 className={`text-xl font-semibold`}>{contributionTitle}</h2>
            <ul className={`list-disc pl-2 xl:leading-8`}>
              {contribution.map((item) => (
                <li className={`list-inside`} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Column>
        )}
        {learning && learning.length > 0 && (
          <Column classNames={`w-full`} gap={`gap-y-3`}>
            <h2 className={`text-xl font-semibold`}>Learning</h2>
            <ul className={`list-disc pl-2`}>
              {learning.map((item) => (
                <li className={`list-inside`} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Column>
        )}
        {motivation && (
          <Column classNames={`w-full`} gap={`gap-y-3`}>
            <h2 className={`text-xl font-semibold`}>Motivation</h2>
            <p
              className={`indent-4 whitespace-pre-wrap leading-6 xl:max-w-xl xl:leading-7`}
            >
              {motivation}
            </p>
          </Column>
        )}
        {learning && learning.length > 0 && (
          <Column classNames={`w-full`} gap={`gap-y-3`}>
            <h2 className={`text-xl font-semibold`}>Learning</h2>
            <ul className={`list-disc pl-2`}>
              {learning.map((item) => (
                <li className={`list-inside`} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Column>
        )}
      </Column>
    </Column>
  );
};

export default SectionTextContent;
