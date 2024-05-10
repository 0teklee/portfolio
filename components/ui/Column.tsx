import React from "react";

import { cn } from "@/lib/utils";

const Column = ({
  children,
  classNames,
  gap = "gap-y-4",
}: {
  children?: React.ReactNode;
  gap?: string;
  classNames?: string;
}) => {
  return (
    <div className={cn(`flex flex-col ${gap}`, classNames)}>{children}</div>
  );
};

export default Column;
