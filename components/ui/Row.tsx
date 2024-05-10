import React from "react";

import { cn } from "@/lib/utils";

const Row = ({
  children,
  classNames,
  gap = "gap-x-4",
}: {
  children?: React.ReactNode;
  gap?: string;
  classNames?: string;
}) => {
  return <div className={cn(`flex ${gap}`, classNames)}>{children}</div>;
};

export default Row;
