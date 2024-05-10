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
