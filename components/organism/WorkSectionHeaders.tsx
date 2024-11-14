// organisms/WorkSectionHeader/index.tsx
import { clsx } from "clsx";

import Column from "@/components/ui/Column";
import DateText from "@/components/ui/DateText";
import Row from "@/components/ui/Row";

interface WorkSectionHeaderProps {
  title: string;
  period: string;
  children: React.ReactNode[]; // Expecting exactly two children
}

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <Column classNames="w-full" gap="gap-y-0">
      {children}
    </Column>
  );
};

const Media = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden lg:flex w-full items-start justify-start">
      {children}
    </div>
  );
};

const WorkSectionHeader = ({
  title,
  period,
  children,
}: WorkSectionHeaderProps) => {
  const [content, media] = children;

  return (
    <Row
      classNames={clsx(
        "flex-col md:flex-row items-start justify-start",
        "w-full sm:mb-0 sm:h-screen snap-start",
        "scroll-my-36 xl:scroll-my-60",
      )}
      gap="gap-24 md:gap-12"
    >
      <Column classNames="w-full justify-between" gap="gap-y-4">
        <Column classNames="w-full justify-between" gap="gap-y-4">
          <h3 className="text-5xl font-semibold title-dot">{title}</h3>
          <DateText date={period} />
        </Column>
        {content}
      </Column>
      {media}
    </Row>
  );
};

WorkSectionHeader.Content = Content;
WorkSectionHeader.Media = Media;

export default WorkSectionHeader;
