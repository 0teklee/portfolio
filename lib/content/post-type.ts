export interface PostTranslation {
  title: string;
  description: string;
  contribution?: string[];
  motivation?: string;
  link?: string;
}

export interface PostTranslateItem {
  id: string;
  date: string;
  images: {
    src: string;
    captions: {
      ko: string;
      en: string;
    };
  }[];
  translations: {
    ko: PostTranslation;
    en: PostTranslation;
  };
}
