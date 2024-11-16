import { PostTranslateItem } from "@/lib/content/post-type";

export const PERSONAL_PROJECTS_FORMAT: PostTranslateItem[] = [
  {
    id: "commenti",
    date: "2023.06 ~ 2024.05",
    images: [
      {
        src: "/images/commenti-1.png",
        captions: {
          ko: "Commenti 메인 화면",
          en: "Commenti Main Screen",
        },
      },
      {
        src: "/images/commenti-8.png",
        captions: {
          ko: "Commenti package - 웹사이트에 설치된 리뷰 섹션",
          en: "Commenti Package - Embedded Review Section on Website",
        },
      },
      {
        src: "/images/commenti-6.png",
        captions: {
          ko: "Paypal 결제",
          en: "Paypal Payment",
        },
      },
      {
        src: "/images/commenti-7.png",
        captions: {
          ko: "Paypal 결제 팝업 (Paypal Client)",
          en: "Paypal Payment Popup (Paypal Client)",
        },
      },
      {
        src: "/images/commenti-11.png",
        captions: {
          ko: "Paypal Invoice 생성",
          en: "Paypal Invoice Creation",
        },
      },
      {
        src: "/images/commenti-2.png",
        captions: {
          ko: "Commenti 유저 대시보드",
          en: "Commenti User Dashboard",
        },
      },
      {
        src: "/images/commenti-3.png",
        captions: {
          ko: "대시보드 - 리뷰 및 게시판 설정, 통계",
          en: "Dashboard - Review and Forum Settings, Statistics",
        },
      },
      {
        src: "/images/commenti-4.png",
        captions: {
          ko: "대시보드 - CSV 대량 리뷰 업로드",
          en: "Dashboard - Bulk Review Upload via CSV",
        },
      },
      {
        src: "/images/commenti-5.png",
        captions: {
          ko: "대시보드 리뷰 통계 페이지",
          en: "Dashboard Review Statistics Page",
        },
      },
    ],
    translations: {
      ko: {
        title: "Commenti",
        link: "https://commenti.co",
        description:
          "상품 리뷰를 손쉽게 수집·관리하는 SaaS 솔루션으로, 웹사이트에 간편히 설치하고 사용할 수 있도록 설계했습니다. 기존 피드백 제품의 번거로운 설치·사용 과정, 높은 비용, 잦은 버그 문제를 개선해 이커머스 운영자를 위한 직관적이고 안정적인 서비스를 제공하고자 했습니다.",
        contribution: [
          "직관적인 사용자 경험을 위해 간편한 로그인 인증 및 리뷰 작성 기능 구현",
          "리뷰를 쉽게 관리할 수 있도록 숨기기, 검증 기능 등 관리 도구 제공",
          "URL 기반 자동 리뷰 수집, CSV 대량 임포트 기능을 통해 리뷰 수집 과정 개선",
          "GitHub Actions와 S3 Client로 UMD 스크립트를 CDN에 자동 배포하고 gzipped 처리로 500ms 이내 서빙 속도 확보",
          "PayPal API를 통한 결제·구독 및 해지 기능과 인보이스 생성 기능으로 이커머스 사용자의 결제 관리 효율화",
          "Google Rich Result(JSON-LD)를 적용해 SEO 최적화 및 검색 가시성 향상",
        ],
      },
      en: {
        title: "Commenti",
        link: "https://commenti.co",
        description:
          "A SaaS solution designed for easy collection and management of product reviews. It can be effortlessly embedded and used on websites. Addressed issues like complex installation, high costs, and frequent bugs in existing feedback solutions to provide an intuitive and reliable service for eCommerce operators.",
        contribution: [
          "Implemented easy login authentication and review creation for intuitive user experience",
          "Provided management tools such as hide and verification features for easier review management",
          "Improved review collection process with URL-based auto-review collection and bulk import via CSV",
          "Used GitHub Actions and S3 Client for auto-deploying UMD scripts to CDN with gzipped processing for sub-500ms serving speed",
          "Enhanced payment management for eCommerce users with PayPal API for subscription and invoice generation",
          "Optimized SEO and search visibility using Google Rich Result (JSON-LD)",
        ],
      },
    },
  },
  {
    id: "soullink",
    date: "2023.06 ~ 2024.05",
    images: [
      {
        src: "/images/soullink - main.png",
        captions: {
          ko: "메인 페이지 - 오늘의 플레이리스트, 팔로우 관계 기반의 플레이리스트, 최근 재생 목록을 전시",
          en: "Main Page - Today's Playlists, Follow-Based Playlists, Recent Playback",
        },
      },
      {
        src: "/images/soullink - discover.png",
        captions: {
          ko: "Discover - 사용자의 재생, 라이크, 팔로우 기반 정보로 플레이리스트를 추천",
          en: "Discover - Playlist Recommendations Based on Playback, Likes, and Follows",
        },
      },
      {
        src: "/images/soullink - trending.png",
        captions: {
          ko: "Trending - 사용자 재생 시간, 재생 횟수, 라이크 순의 랭킹 차트를 보여주는 페이지",
          en: "Trending - Page Displaying Rankings by Playback Time, Count, and Likes",
        },
      },
      {
        src: "/images/soullink - profile.png",
        captions: {
          ko: "Profile - 유저 프로필. 유저 기반의 플레이리스트 조회, 팔로우, 수정, 방명록(비밀글) 기능 구현",
          en: "Profile - User Profile with Playlist Viewing, Following, Editing, and Guestbook Features",
        },
      },
      {
        src: "/images/soullink - playlist detail.png",
        captions: {
          ko: "Playlist 디테일 - 플레이리스트, 개별 노래 재생 및 라이크, 댓글 기능 구현",
          en: "Playlist Details - Playlist and Song Playback, Likes, and Comment Features",
        },
      },
      {
        src: "/images/soullink - edit.png",
        captions: {
          ko: "Playlist Edit - 플레이리스트 수정 모달. 플레이리스트 커버 이미지 변경, 노래 추가, 삭제 기능 구현",
          en: "Playlist Edit - Modal for Cover Image Changes, Adding/Deleting Songs",
        },
      },
      {
        src: "/images/soullink - create.png",
        captions: {
          ko: "Create playlist - 장르, 카테고리, 제목, 커버 이미지 업로드, 유튜브 노래 검색 후 추가",
          en: "Create Playlist - Genre, Category, Title, Cover Image Upload, and YouTube Song Search",
        },
      },
      {
        src: "/images/soullink - search.png",
        captions: {
          ko: "Search - 키워드 기반으로 플레이리스트, 유저, 카테고리 검색. 검색 결과 필터링 기능 구현",
          en: "Search - Keyword-Based Playlist, User, and Category Search with Filtering",
        },
      },
    ],
    translations: {
      ko: {
        title: "SoulLink",
        link: "https://soullink.cc",
        description:
          "플레이리스트를 공유하는 소셜 웹앱을 개발했습니다. 유저들이 플레이리스트를 만들고, 공유하며, 재생할 수 있도록 설계되었습니다. 장기적인 운영을 목표로 사용자들의 피드백을 받아 꾸준히 성능 최적화와 사용자 경험(UX)을 개선하고 있습니다.",
        contribution: [
          "1인 UX 기획부터 디자인, API, UI 개발",
          "음악 재생 및 플레이리스트 데이터 기반 소셜 플랫폼 설계 및 구현",
          "직관적인 UX를 고려한 UI 디자인 및 프론트엔드 개발",
          "YouTube API 연동을 통한 곡 검색 및 플레이리스트 생성 기능 개발",
          "사용자 데이터 분석을 통한 개인화된 플레이리스트 추천 시스템 구축",
        ],
      },
      en: {
        title: "SoulLink",
        link: "https://soullink.cc",
        description:
          "Developed a social web app for sharing playlists, designed for users to create, share, and play playlists. Focused on long-term operation by continuously optimizing performance and improving user experience (UX) based on feedback.",
        contribution: [
          "Handled UX planning, design, API, and UI development as a single developer",
          "Designed and implemented a social platform based on music playback and playlist data",
          "Developed UI with an intuitive UX focus",
          "Integrated YouTube API for song search and playlist creation",
          "Built a personalized playlist recommendation system through user data analysis",
        ],
      },
    },
  },
  {
    id: "teklog",
    date: "2022.07 ~ 2022.08",
    images: [
      {
        src: "/images/teklog-1.png",
        captions: {
          ko: "TekLog 메인 화면",
          en: "TekLog Main Screen",
        },
      },
      {
        src: "/images/teklog-6.png",
        captions: {
          ko: "모바일 반응형 대응",
          en: "Mobile Responsiveness",
        },
      },
      {
        src: "/images/teklog-10.png",
        captions: {
          ko: "블로그 작성 및 수정/삭제. Quill Editor 공용 컴포넌트 사용",
          en: "Blog Creation, Editing, and Deletion Using Quill Editor Component",
        },
      },
      {
        src: "/images/teklog-2.png",
        captions: {
          ko: "블로그 리스팅 페이지 (사이드 메뉴, 리스트 페이지네이션)",
          en: "Blog Listing Page (Side Menu, List Pagination)",
        },
      },
      {
        src: "/images/teklog-3.png",
        captions: {
          ko: "블로그 포스팅",
          en: "Blog Posting",
        },
      },
      {
        src: "/images/teklog-4.png",
        captions: {
          ko: "이미지 갤러리",
          en: "Image Gallery",
        },
      },
      {
        src: "/images/teklog-5.png",
        captions: {
          ko: "포스팅 아카이브",
          en: "Post Archive",
        },
      },
    ],
    translations: {
      ko: {
        title: "Teklog",
        link: "https://teklog.site",
        description:
          "사이트 내에서 CRUD가 가능한 기술 블로그를 개발하였습니다. 프론트와 백엔드를 1인으로 개발하고 배포하였습니다. 배포 이후에도 공부한 내용을 업로드하고, 필요한 새로운 기능을 추가했습니다.",
        contribution: [
          "1인 UX 기획 및 풀스택 개발",
          "메인 페이지 및 상세 페이지 개발",
          "블로그 글쓰기/수정 에디터 개발",
          "방명록 페이지 및 구글 OAuth 인증 추가 기능 개발",
          "React 18, Next.js 14 App router 마이그레이션",
          "방명록 추가 기능 개발 및 React 18, Next.js 14 App router 마이그레이션",
        ],
      },
      en: {
        title: "Teklog",
        link: "https://teklog.site",
        description:
          "Developed a technical blog with full CRUD functionality, managing both front and back-end development and deployment as a single developer. Continued to upload study materials and added new features post-deployment.",
        contribution: [
          "Planned UX and developed the project as a full-stack developer",
          "Developed the main and detail pages",
          "Created a blog writing/editing editor",
          "Added guestbook and Google OAuth authentication features",
          "Migrated to React 18 and Next.js 14 App Router",
          "Developed additional guestbook features and optimized routing",
        ],
      },
    },
  },
];

export const PERSONAL_PROCESSES_FORMAT: PostTranslateItem[] = [
  {
    id: "commenti_process",
    date: "2024.08 ~ 2024.10",
    images: [
      {
        src: "/images/commenti-p-1.png",
        captions: {
          ko: "프로젝트 문서화 관리 및 시장 조사 자료",
          en: "Project Documentation Management and Market Research Data",
        },
      },
      {
        src: "/images/commenti-p-2.png",
        captions: {
          ko: "개발 및 QA 태스크 관리",
          en: "Development and QA Task Management",
        },
      },
      {
        src: "/images/commenti-p-3.png",
        captions: {
          ko: "랜딩 페이지 Lighthouse performance",
          en: "Landing Page Lighthouse Performance",
        },
      },
      {
        src: "/images/commenti-10.png",
        captions: {
          ko: "대시보드 - Amazon 자동 리뷰 수집 기능 개발",
          en: "Dashboard - Amazon Auto Review Collection Feature",
        },
      },
    ],
    translations: {
      ko: {
        title: "Process - Commenti",
        description: "",
        motivation: `세 가지 이유로 Commenti 프로젝트를 시작했습니다. 첫째로, 실제 시장에서 경쟁할 수 있는 제품을 만들고 싶었습니다. 이전에는 학습을 위한 토이 프로젝트를 주로 진행했지만, 이번에는 검증된 시장에서 의미 있는 도전에 나서고자 했습니다. 
        둘째로, 1인 개발자가 감당할 수 있는 규모의 아이디어를 찾았습니다. 시장 조사를 통해 온라인 스토어들이 리뷰 시스템에서 겪는 문제—높은 가격, 설치 어려움, 성능 이슈—를 발견했고, 이를 해결하는 '쉽게 부착할 수 있는 리뷰 시스템'을 개발하기로 결정했습니다. 
        마지막으로, 실제 서비스를 만드는 전 과정을 경험하고 싶었습니다. 데이터베이스 설계부터 API 개발, Paypal을 이용한 결제와 인보이스 자동화까지 풀스택 개발을 경험했고, Shadow DOM 기반의 안전한 위젯을 구현했습니다. 이 과정에서 Supabase, Next.js, React, Vite 등 현대적인 기술 스택을 활용하여 서비스를 구축했습니다. 1인 개발자로서 기획부터 배포, 운영까지 전체 제품 개발 사이클을 경험할 수 있었습니다.`,
      },
      en: {
        title: "Process - Commenti",
        description: "",
        motivation: `The Commenti project began for three reasons. First, I wanted to create a product that could compete in the real market, moving beyond toy projects for learning purposes to take on a meaningful challenge in a proven market.
        Second, I identified an idea that was manageable for a solo developer. Market research revealed that online stores faced issues with review systems, such as high costs, installation difficulties, and performance issues. I decided to develop an 'easily attachable review system' to address these problems.
        Lastly, I wanted to experience the full process of creating an actual service. This involved everything from database design to API development, and automating payments and invoices using PayPal, as well as creating a secure widget with Shadow DOM. Using a modern tech stack including Supabase, Next.js, React, and Vite, I was able to experience the entire product development cycle from planning to deployment and maintenance as a solo developer.`,
      },
    },
  },
  {
    id: "soullink_process",
    date: "2023.06 ~ 2024.05",
    images: [
      {
        src: "/images/soullink-process-1.png",
        captions: {
          ko: "Figma 디자인 단계",
          en: "Figma Design Stage",
        },
      },
      {
        src: "/images/soullink-process-2.png",
        captions: {
          ko: "MVP 당시 기획 문서",
          en: "MVP Planning Document",
        },
      },
      {
        src: "/images/soullink-performance.png",
        captions: {
          ko: "주요 페이지 Lighthouse Score",
          en: "Key Page Lighthouse Score",
        },
      },
      {
        src: "/images/soullink-process-3.png",
        captions: {
          ko: "플레이리스트 곡 추가 UX 개선",
          en: "Playlist Song Addition UX Improvement",
        },
      },
      {
        src: "/images/soullink-process-4.png",
        captions: {
          ko: "플레이리스트 수정 UX",
          en: "Playlist Editing UX",
        },
      },
      {
        src: "/images/soullink-process-5.png",
        captions: {
          ko: "검색 공용 모달 추가 구현",
          en: "Added Shared Search Modal Implementation",
        },
      },
      {
        src: "/images/soullink-process-6.png",
        captions: {
          ko: "플레이리스트 커버 이미지 다운로드 모달 추가 구현",
          en: "Added Modal for Downloading Playlist Cover Image",
        },
      },
      {
        src: "/images/soullink-fallback.png",
        captions: {
          ko: "Suspense, Error 바운더리 도입 후 공용 fallback UI",
          en: "Fallback UI After Adding Suspense and Error Boundaries",
        },
      },
    ],
    translations: {
      ko: {
        title: "Process - SoulLink",
        description: "",
        motivation: `세 가지 이유로 SoulLink 프로젝트를 시작했습니다. 첫째, 음악을 듣고 공유할 수 있는 공간이 필요하다고 생각했습니다. 여러 음악 스트리밍 서비스가 존재하지만, 이들은 파편화되어 있어 통합된 음악 중심의 소셜 플랫폼이 부족하다고 느꼈습니다.  
        둘째로, Next.js 14 App router와 리액트 서버 컴포넌트를 중심으로 프로젝트를 개발하여 배포하고 싶었습니다. 개발 당시 Next.js 14와 서버 컴포넌트를 실무에 적용하기엔 이른 시기였습니다. 실무에 적용하기 전, 먼저 직접 경험해보고자 프로젝트를 시작하게 되었습니다.
        마지막으로 난이도 있는 프로젝트에 도전하고 싶었습니다. 음악 재생과 함께 데이터 수집을 하고, 이를 기반으로 다양한 기능을 제공하는 서비스를 설계하고 싶었습니다. 개발과정에서 사용성을 고려해 여러 기능을 추가하게 되었습니다.`,
      },
      en: {
        title: "Process - SoulLink",
        description: "",
        motivation: `The SoulLink project began for three reasons. First, I felt a need for a space where people could listen to and share music. Although many music streaming services exist, they are fragmented, and I sensed a lack of a unified music-centered social platform.
        Second, I wanted to develop and deploy a project using Next.js 14 App Router and React server components. At the time, it was too early to apply Next.js 14 and server components to real work, so I decided to gain hands-on experience first with this project.
        Lastly, I wanted to challenge myself with a complex project. My goal was to design a service that would collect data through music playback and offer various features based on this data. Throughout the development process, I added several features to enhance usability.`,
      },
    },
  },
  {
    id: "teklog_process",
    date: "2022.08 ~ Current",
    images: [
      {
        src: "/images/teklog-9.png",
        captions: {
          ko: "RSC, APP 라우터 적용 이후 성능 개선 (주요 페이지 performance 99-100)",
          en: "Performance Improvement After Applying RSC and APP Router (Key Pages Performance 99-100)",
        },
      },
      {
        src: "/images/teklog-7.png",
        captions: {
          ko: "방명록 및 비밀글 / 댓글 기능을 통해 react-query 도입",
          en: "Implemented React-Query via Guestbook and Private/Comment Features",
        },
      },
      {
        src: "/images/teklog-8.png",
        captions: {
          ko: "Suspense, Error 바운더리 도입 후 Fallback UI",
          en: "Fallback UI After Adding Suspense and Error Boundaries",
        },
      },
    ],
    translations: {
      ko: {
        title: "Process - Teklog",
        description:
          "개발 이후에도 공부한 내용을 업로드하였고, 필요한 새로운 기능을 추가하였습니다. 새로운 기술을 학습하고 적용하는 테스트 베드가 되어 성장의 발판이 되고 있습니다.",
        motivation:
          "커리어와 함께 성장하는 의미있는 블로그를 만들고 싶었습니다. UI/UX 기획과 개발, 배포까지 전체적인 프로세스를 경험하고자 했습니다. 개발 이후에도 성능 최적화, 예외처리 강화, 방명록과 같은 신기능을 추가 등 지속적인 유지보수와 개선 작업을 이어가고 있습니다.",
      },
      en: {
        title: "Process - Teklog",
        description:
          "Continued to upload study materials and added new features post-development. This has served as a test bed for learning and applying new technologies, fostering growth.",
        motivation:
          "I aimed to create a meaningful blog that grows with my career. I wanted to experience the entire process from UI/UX planning and development to deployment. Post-development, I have continued with performance optimization, enhanced error handling, added new features like a guestbook, and ongoing maintenance and improvements.",
      },
    },
  },
];

// module.exports = {
//   PERSONAL_PROJECTS_FORMAT,
//   PERSONAL_PROCESSES_FORMAT,
// };
