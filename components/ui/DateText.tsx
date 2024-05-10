import React from "react";

const DateText = ({ date }: { date: string }) => (
  <p className={`pl-1 text-sm text-gray-500`}>{date}</p>
);

export default DateText;
