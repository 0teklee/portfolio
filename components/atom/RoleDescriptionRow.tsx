import cn from "clsx";

import Row from "@/components/ui/Row";

const RoleDescriptionRow = ({
  title,
  content,
  contentClassname = "",
  className = "",
}: {
  title: string;
  content: string;
  contentClassname?: string;
  className?: string;
}) => (
  <Row
    classNames={cn(
      `justify-between items-center w-full py-5`,
      `border-b border-gray-200`,
      `text-lg font-medium`,
      className,
    )}
  >
    <p>{title}</p>
    <p className={cn(contentClassname)}>{content}</p>
  </Row>
);

export default RoleDescriptionRow;
