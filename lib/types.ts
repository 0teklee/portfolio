export interface ISectionItem {
  id: string;
  title: string;
  date: string;
  images: { src: string; caption: string }[];
  contribution: string[];
  description?: string;
  motivation?: string;
  learning?: string[];
}

export interface IProjectPageItem
  extends Omit<ISectionItem, "contribution" | "description"> {
  motivation: string;
  description: string;
}

export interface IProjectListItem {
  href: string;
  title: string;
  dateRange: string;
}

export interface IProjectRoles {
  title: string;
  content: string;
  className?: string;
  contentClassname?: string;
}
