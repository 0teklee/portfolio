import React from "react";

import Column from "@/components/ui/Column";
import LinkItem from "@/components/atom/NavLinkItems";
import {JOB_EXP_COINVESTOR_LINKS} from "@/lib/constants";

const CoinvestorList = () => {
  return (
    <Column classNames="w-full here?" gap={`gap-y-0`}>
      <div className={`[&>*:last-child>div]:border-b-0`}>
        {JOB_EXP_COINVESTOR_LINKS.map((experience) => (
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
  );
};

export default CoinvestorList;
