import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { JOB_POSTS } from "../lib/content/job-posts";
import {
  PERSONAL_PROCESSES_FORMAT,
  PERSONAL_PROJECTS_FORMAT,
} from "../lib/content/personal-posts";
import { PostTranslateItem } from "../lib/content/post-type";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function transformPostsToI18nFormat(
  posts: PostTranslateItem[],
  locale: "ko" | "en",
) {
  return posts.reduce(
    (acc, post) => {
      acc[post.id] = {
        title: post.translations[locale].title,
        link: post.translations[locale]?.link || "",
        description: post.translations[locale].description,
        date: post.date,
        ...(post.translations[locale].contribution && {
          contribution: post.translations[locale].contribution,
        }),
        ...(post.translations[locale].motivation && {
          motivation: post.translations[locale].motivation,
        }),
        images: post.images.map((img) => ({
          src: img.src,
          caption: img.captions[locale],
        })),
      };
      return acc;
    },
    {} as { [p: string]: any },
  );
}

function generateI18nFiles() {
  const languages = ["en", "ko"] as const;

  languages.forEach((lang) => {
    const i18nContent = {
      [lang]: {
        job: transformPostsToI18nFormat(JOB_POSTS, lang),
        personal: {
          projects: transformPostsToI18nFormat(PERSONAL_PROJECTS_FORMAT, lang),
          processes: transformPostsToI18nFormat(
            PERSONAL_PROCESSES_FORMAT,
            lang,
          ),
        },
      },
      contacts:
        lang === "ko"
          ? {
              title: "Contacts",
              github: "Github",
              resume: "FE 이택우 이력서 (KR)",
              cv: "FE 이택우 경력 기술서",
              blog: "Teklog",
              email: "leetekwoo@gmail.com",
            }
          : {
              title: "Contacts",
              github: "Github",
              resume: "FE Lee Tekwoo Resume (EN)",
              cv: "FE Lee Tekwoo CV",
              blog: "Teklog",
              email: "leetekwoo@gmail.com",
            },
    };

    const messagesDir = path.join(process.cwd(), "messages");
    if (!fs.existsSync(messagesDir)) {
      fs.mkdirSync(messagesDir);
    }

    fs.writeFileSync(
      path.join(messagesDir, `${lang}.json`),
      JSON.stringify(i18nContent, null, 2),
      "utf8",
    );

    console.log(`Generated ${lang}.json successfully`);
  });
}

function validateTranslations() {
  const allPosts: PostTranslateItem[] = [
    ...JOB_POSTS,
    ...PERSONAL_PROJECTS_FORMAT,
    ...PERSONAL_PROCESSES_FORMAT,
  ];

  const missingTranslations: string[] = [];

  allPosts.forEach((post) => {
    if (!post.translations.en || !post.translations.ko) {
      missingTranslations.push(`Post ${post.id} is missing translations`);
    }

    post.images.forEach((img, index) => {
      if (!img.captions.en || !img.captions.ko) {
        missingTranslations.push(
          `Post ${post.id}, image ${index} (${img.src}) is missing captions`,
        );
      }
    });
  });

  if (missingTranslations.length > 0) {
    console.error("Translation validation failed:");
    missingTranslations.forEach((msg) => console.error(msg));
    process.exit(1);
  }

  console.log("All translations validated successfully");
}

validateTranslations();
generateI18nFiles();
