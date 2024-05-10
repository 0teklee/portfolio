import React from "react";

import CoinvestorList from "@/components/molecules/CoinvestorList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const JobExpAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="coinvestor">
        <AccordionTrigger>
          <p className="pb-2 text-xl">Projects</p>
        </AccordionTrigger>
        <AccordionContent>
          <CoinvestorList />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default JobExpAccordion;
