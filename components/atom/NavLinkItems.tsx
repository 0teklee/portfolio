import Link from "next/link";

import cn from "clsx";

import Row from "@/components/ui/Row";

const LinkItem = ({
  href,
  title,
  dateRange,
  className = "",
}: {
  href: string;
  title: string;
  dateRange: string;
  className?: string;
}) => (
  <Link href={href}>
    <Row
      classNames={cn(
        `group cursor-pointer`,
        `justify-between items-center w-full px-3 py-3`,
        `border-b border-gray-200`,
        `text-md font-medium`,
        `hover:text-blue-500`,
        `transition-all duration-200 ease-in-out`,
        className,
      )}
    >
      <p>{title}</p>
      {dateRange && <p>{dateRange}</p>}
    </Row>
  </Link>
);

export default LinkItem;
