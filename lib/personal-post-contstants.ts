import { IProjectPageItem, ISectionItem } from "@/lib/types";

export const PERSONAL_PROJECTS: ISectionItem[] = [
  {
    id: "commenti",
    date: "2023.06 ~ 2024.05",
    title: "Commenti",
    description:
      "상품 리뷰를 손쉽게 수집·관리하는 SaaS 솔루션으로, 웹사이트에 간편히 설치하고 사용할 수 있도록 설계했습니다. 기존 피드백 제품의 번거로운 설치·사용 과정, 높은 비용, 잦은 버그 문제를 개선해 이커머스 운영자를 위한 직관적이고 안정적인 서비스를 제공하고자 했습니다.",
    images: [
      {
        src: "/images/soullink - main.png",
        caption:
          "메인 페이지 - 오늘의 플레이리스트, 팔로우 관계 기반의 플레이리스트, 최근 재생 목록을 전시",
      },
      {
        src: "/images/soullink - discover.png",
        caption:
          "Discover - 사용자의 재생, 라이크, 팔로우 기반 정보로 플레이리스트를 추천",
      },
      {
        src: "/images/soullink - trending.png",
        caption:
          "Trending - 사용자 재생 시간, 재생 횟수, 라이크 순의 랭킹 차트를 보여주는 페이지",
      },
      {
        src: "/images/soullink - profile.png",
        caption:
          "Profile - 유저 프로필. 유저 기반의 플레이리스트 조회, 팔로우, 수정, 방명록(비밀글) 기능 구현",
      },
      {
        src: "/images/soullink - playlist detail.png",
        caption:
          "Playlist 디테일 - 플레이리스트, 개별 노래 재생 및 라이크, 댓글 기능 구현",
      },
      {
        src: "/images/soullink - edit.png",
        caption:
          "Playlist Edit - 플레이리스트 수정 모달. 플레이리스트 커버 이미지 변경, 노래 추가, 삭제 기능 구현",
      },
      {
        src: "/images/soullink - create.png",
        caption:
          "Create playlist - 장르, 카테고리, 제목, 커버 이미지 업로드, 유튜브 노래 검색 후 추가",
      },
      {
        src: "/images/soullink - search.png",
        caption:
          "Search - 키워드 기반으로 플레이리스트, 유저, 카테고리 검색. 검색 결과 필터링 기능 구현",
      },
    ],
    contribution: [
      "1인 UX 기획부터 디자인, api, ui 개발",
      "음악 재생 및 플레이리스트 데이터 기반 소셜 플랫폼 설계 및 구현",
      "직관적인 UX를 고려한 UI 디자인 및 프론트엔드 개발",
      "YouTube API 연동을 통한 곡 검색 및 플레이리스트 생성 기능 개발",
      "사용자 데이터 분석을 통한 개인화된 플레이리스트 추천 시스템 구축",
    ],
  },
  {
    id: "soullink",
    date: "2023.06 ~ 2024.05",
    title: "SoulLink",
    description:
      "플레이리스트를 공유하는 소셜 웹앱을 개발했습니다. 유저들이 플레이리스트를 만들고, 공유하며, 재생할 수 있도록 설계되었습니다. 장기적인 운영을 목표로 사용자들의 피드백을 받아 꾸준히 성능 최적화와 사용자 경험(UX)을 개선하고 있습니다.",
    images: [
      {
        src: "/images/soullink - main.png",
        caption:
          "메인 페이지 - 오늘의 플레이리스트, 팔로우 관계 기반의 플레이리스트, 최근 재생 목록을 전시",
      },
      {
        src: "/images/soullink - discover.png",
        caption:
          "Discover - 사용자의 재생, 라이크, 팔로우 기반 정보로 플레이리스트를 추천",
      },
      {
        src: "/images/soullink - trending.png",
        caption:
          "Trending - 사용자 재생 시간, 재생 횟수, 라이크 순의 랭킹 차트를 보여주는 페이지",
      },
      {
        src: "/images/soullink - profile.png",
        caption:
          "Profile - 유저 프로필. 유저 기반의 플레이리스트 조회, 팔로우, 수정, 방명록(비밀글) 기능 구현",
      },
      {
        src: "/images/soullink - playlist detail.png",
        caption:
          "Playlist 디테일 - 플레이리스트, 개별 노래 재생 및 라이크, 댓글 기능 구현",
      },
      {
        src: "/images/soullink - edit.png",
        caption:
          "Playlist Edit - 플레이리스트 수정 모달. 플레이리스트 커버 이미지 변경, 노래 추가, 삭제 기능 구현",
      },
      {
        src: "/images/soullink - create.png",
        caption:
          "Create playlist - 장르, 카테고리, 제목, 커버 이미지 업로드, 유튜브 노래 검색 후 추가",
      },
      {
        src: "/images/soullink - search.png",
        caption:
          "Search - 키워드 기반으로 플레이리스트, 유저, 카테고리 검색. 검색 결과 필터링 기능 구현",
      },
    ],
    contribution: [
      "1인 UX 기획부터 디자인, api, ui 개발",
      "음악 재생 및 플레이리스트 데이터 기반 소셜 플랫폼 설계 및 구현",
      "직관적인 UX를 고려한 UI 디자인 및 프론트엔드 개발",
      "YouTube API 연동을 통한 곡 검색 및 플레이리스트 생성 기능 개발",
      "사용자 데이터 분석을 통한 개인화된 플레이리스트 추천 시스템 구축",
    ],
  },
  {
    id: "teklog",
    date: "2022.07 ~ 2022.08",
    title: "Teklog",
    description:
      "사이트 내에서 CRUD가 가능한 기술 블로그를 개발하였습니다. 프론트와 백엔드를 1인으로 개발하고 배포하였습니다. 배포 이후에도 공부한 내용을 업로드하고, 필요한 새로운 기능을 추가했습니다.",
    images: [
      { src: "/images/teklog-1.png", caption: "TekLog 메인 화면" },
      { src: "/images/teklog-6.png", caption: "모바일 반응형 대응" },
      {
        src: "/images/teklog-10.png",
        caption: "블로그 작성 및 수정/삭제. Quill Editor 공용 컴포넌트 사용",
      },
      {
        src: "/images/teklog-2.png",
        caption: "블로그 리스팅 페이지 (사이드 메뉴, 리스트 페이지네이션)",
      },
      { src: "/images/teklog-3.png", caption: "블로그 포스팅" },
      { src: "/images/teklog-4.png", caption: "이미지 갤러리" },
      { src: "/images/teklog-5.png", caption: "포스팅 아카이브" },
    ],
    contribution: [
      "1인 UX 기획 및 풀스택 개발",
      "메인 페이지 및 상세 페이지 개발",
      "블로그 글쓰기 / 수정 에디터 개발",
      "방명록 페이지 및 구글 OAuth 인증 추가 기능 개발",
      "React 18, Next.js 14 App router 마이그레이션",
      "방명록 추가 기능 개발 및 React 18, Next.js 14 App router 마이그레이션",
    ],
  },
];
export const PERSONAL_PROCESSES: IProjectPageItem[] = [
  {
    id: "commenti_process",
    date: "2024.08 ~ 2024.10",
    title: "Process - SoulLink",
    description: "",
    motivation: `세가지 이유로 SoulLink 프로젝트를 시작했습니다. 첫번째로, 음악을 듣고 공유할 수 있는 공간이 필요하다고 생각했습니다. 여러 음악 스트리밍 서비스가 존재하지만, 이들은 파편화되어 있어 통합된 음악 중심의 소셜 플랫폼이 부족하다고 느꼈습니다.  
    둘째로, Next.js 14 App router와 리액트 서버 컴포넌트를 중심으로 프로젝트를 개발하여 배포하고 싶었습니다. 개발 당시 Next.js 14와 서버 컴포넌트를 실무에 적용하기엔 이른 시기였습니다. 실무에 적용하기 전, 먼저 직접 경험해보고자 프로젝트를 시작하게 되었습니다.
    마지막으로 난이도 있는 프로젝트에 도전하고 싶었습니다. 음악 재생과 함께 데이터 수집을 하고, 이를 기반으로 다양한 기능을 제공하는 서비스를 설계하고 싶었습니다. 개발과정에서 사용성을 고려해 여러 기능을 추가하게 되었습니다.`,
    images: [
      { src: "/images/soullink-process-1.png", caption: "Figma 디자인 단계" },
      { src: "/images/soullink-process-2.png", caption: "MVP 당시 기획 문서" },
      {
        src: "/images/soullink-performance.png",
        caption: "주요 페이지 Lighthouse Score",
      },
      {
        src: "/images/soullink-process-3.png",
        caption: "플레이리스트 곡 추가 UX 개선",
      },
      {
        src: "/images/soullink-process-4.png",
        caption: "플레이리스트 수정 UX",
      },
      {
        src: "/images/soullink-process-5.png",
        caption: "검색 공용 모달 추가 구현",
      },
      {
        src: "/images/soullink-process-6.png",
        caption: "플레이리스트 커버 이미지 다운로드 모달 추가 구현",
      },
      {
        src: "/images/soullink- fallback.png",
        caption: "Suspense, Error 바운더리 도입 후 공용 fallback ui",
      },
    ],
  },
  {
    id: "soullink_process",
    date: "2023.06 ~ 2024.05",
    title: "Process - SoulLink",
    description: "",
    motivation: `세가지 이유로 SoulLink 프로젝트를 시작했습니다. 첫번째로, 음악을 듣고 공유할 수 있는 공간이 필요하다고 생각했습니다. 여러 음악 스트리밍 서비스가 존재하지만, 이들은 파편화되어 있어 통합된 음악 중심의 소셜 플랫폼이 부족하다고 느꼈습니다.  
    둘째로, Next.js 14 App router와 리액트 서버 컴포넌트를 중심으로 프로젝트를 개발하여 배포하고 싶었습니다. 개발 당시 Next.js 14와 서버 컴포넌트를 실무에 적용하기엔 이른 시기였습니다. 실무에 적용하기 전, 먼저 직접 경험해보고자 프로젝트를 시작하게 되었습니다.
    마지막으로 난이도 있는 프로젝트에 도전하고 싶었습니다. 음악 재생과 함께 데이터 수집을 하고, 이를 기반으로 다양한 기능을 제공하는 서비스를 설계하고 싶었습니다. 개발과정에서 사용성을 고려해 여러 기능을 추가하게 되었습니다.`,
    images: [
      { src: "/images/soullink-process-1.png", caption: "Figma 디자인 단계" },
      { src: "/images/soullink-process-2.png", caption: "MVP 당시 기획 문서" },
      {
        src: "/images/soullink-performance.png",
        caption: "주요 페이지 Lighthouse Score",
      },
      {
        src: "/images/soullink-process-3.png",
        caption: "플레이리스트 곡 추가 UX 개선",
      },
      {
        src: "/images/soullink-process-4.png",
        caption: "플레이리스트 수정 UX",
      },
      {
        src: "/images/soullink-process-5.png",
        caption: "검색 공용 모달 추가 구현",
      },
      {
        src: "/images/soullink-process-6.png",
        caption: "플레이리스트 커버 이미지 다운로드 모달 추가 구현",
      },
      {
        src: "/images/soullink- fallback.png",
        caption: "Suspense, Error 바운더리 도입 후 공용 fallback ui",
      },
    ],
  },
  {
    id: "teklog_process",
    date: "2022.08 ~ Current",
    title: "Process - Teklog",
    description: `개발 이후에도 공부한 내용을 업로드하였고, 필요한 새로운 기능을 추가하였습니다. 새로운 기술을 학습하고 적용하는 테스트 베드가 되어 성장의 발판이 되고 있습니다.`,
    motivation: `커리어와 함께 성장하는 의미있는 블로그를 만들고 싶었습니다. UI/UX 기획과 개발, 배포까지 전체적인 프로세스를 경험하고자 했습니다. 개발 이후에도 성능 최적화, 예외처리 강화, 방명록과 같은 신기능을 추가 등 지속적인 유지보수와 개선 작업을 이어가고 있습니다.`,
    images: [
      {
        src: "/images/teklog-9.png",
        caption:
          "RSC, APP 라우터 적용 이후 성능 개선 (주요 페이지 performance 99-100)",
      },
      {
        src: "/images/teklog-7.png",
        caption: "방명록 및 비밀글 / 댓글 기능을 통해 react-query 도입 ",
      },
      {
        src: "/images/teklog-8.png",
        caption: "Suspense, Error 바운더리 도입 후 Fallback UI",
      },
    ],
  },
];
