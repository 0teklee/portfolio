import React from "react";

import Column from "@/components/ui/Column";
import Row from "@/components/ui/Row";

import { cn } from "@/lib/utils";

const CoinvestorRoles = () => {
  return (
    <Column classNames={`w-full items-start`}>
      <Row
        classNames={cn(
          `justify-between items-center w-full py-5`,
          `border-b border-gray-200`,
          `text-xl font-medium`,
        )}
      >
        <p>Information</p>
      </Row>
      <Row
        classNames={cn(
          `justify-between items-center w-full py-5`,
          `border-b border-gray-200`,
          `text-lg font-medium`,
        )}
      >
        <p>Position</p>
        <p className={`text-blue-500`}>Frontend Engineer</p>
      </Row>
      <Row
        classNames={cn(
          `justify-between items-center w-full py-5`,
          `border-b border-gray-200`,
          `text-lg font-medium`,
        )}
      >
        <p>Period</p>
        <p>2022.11 ~ Current</p>
      </Row>
    </Column>
  );
};

export default CoinvestorRoles;
