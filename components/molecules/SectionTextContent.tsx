import React from "react";

import Link from "next/link";

import { LinkIcon } from "lucide-react";

import Column from "@/components/ui/Column";
import DateText from "@/components/ui/DateText";
import Row from "@/components/ui/Row";

import { ISectionItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ISectionTextContent
  extends Pick<ISectionItem, "description" | "learning" | "motivation"> {
  title: string;
  date: string;
  contribution?: string[];
  contributionTitle?: string;
  link?: string;
}

const SectionTextContent = ({
  description,
  contribution = [],
  learning,
  motivation,
  contributionTitle = "Contribution",
  title,
  date,
  link,
}: ISectionTextContent) => {
  return (
    <Column classNames={`flex-1 relative pt-8 pb-12`} gap={`gap-y-12`}>
      <Column classNames={`w-full justify-start`} gap={`gap-y-1.5`}>
        <h1
          className={`mb-4 text-5xl font-semibold scroll-my-24 xl:scroll-my-36 lg:snap-start title-dot`}
        >
          {title}
        </h1>
        <Column gap={`gap-y-0.5`}>
          {!!link && (
            <Row classNames={`text-gray-900 group`} gap={`gap-x-0`}>
              <LinkIcon className={`group-hover:text-blue-500 w-4 h-4`} />
              <Link
                className={`text-sm font-medium group-hover:text-blue-500`}
                href={link}
                target={`_blank`}
              >
                Site link
              </Link>
            </Row>
          )}
          <DateText date={date} />
        </Column>
      </Column>
      <Column classNames={`w-full`} gap={`gap-y-6`}>
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
                <li
                  className={cn(
                    `list-inside`,
                    contribution?.length >= 5 ? "text-[13px] leading-6" : "",
                  )}
                  key={item}
                >
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
