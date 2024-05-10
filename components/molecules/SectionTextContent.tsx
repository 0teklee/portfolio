import React from "react";

import Column from "@/components/ui/Column";
import DateText from "@/components/ui/DateText";

import { ISectionItem } from "@/lib/types";

const SectionTextContent = ({
  title,
  description,
  date,
  contribution,
  learning,
}: Pick<
  ISectionItem,
  "title" | "date" | "description" | "contribution" | "learning"
>) => {
  return (
    <Column classNames={`flex-1 relative top-[10%]`} gap={`gap-y-20`}>
      <Column classNames={`w-full justify-start`} gap={`gap-y-1.5`}>
        <h1
          className={`text-5xl font-semibold scroll-my-24 xl:scroll-my-36 snap-start title-dot`}
        >
          {title}
        </h1>
        <DateText date={date} />
      </Column>
      <Column classNames={`w-full`} gap={`gap-y-12`}>
        {description && (
          <p
            className={`indent-4 whitespace-pre-wrap leading-6 xl:max-w-xl xl:leading-7 xl:text-lg`}
          >
            {description}
          </p>
        )}
        <Column classNames={`w-full`} gap={`gap-y-3`}>
          <h2 className={`text-xl font-semibold`}>Contribution</h2>
          <ul className={`list-disc pl-2 xl:leading-8`}>
            {contribution.map((item) => (
              <li className={`list-inside`} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </Column>
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
