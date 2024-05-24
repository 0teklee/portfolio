import { IProjectPageItem, ISectionItem } from "@/lib/types";

export const JOB_EXP_COINVESTOR: ISectionItem[] = [
  {
    id: "coinvestor_earn",
    title: "Earn",
    date: "2024.03 ~ 2024.04",
    description:
      "고정 수익형 펀드 상품 'Earn'을 위해 마켓과 구독 기능을 개발했습니다. 기존 퀀트 상품은 특정 기간에만 구독할 수 있는 문제가 있었지만, 이를 개선하여 언제든지 구독할 수 있도록 기획되었습니다.",
    images: [
      { src: "/images/earn-screenshot.png", caption: "Earn 상품 출시" },
      {
        src: "/images/earn-market.png",
        caption: "Earn 펀드 마켓 (웹 / 모바일)",
      },
      {
        src: "/images/earn-subscribe.png",
        caption: "Earn 구독 기능 (웹 / 모바일)",
      },
      {
        src: "/images/earn-subscribe-steps.png",
        caption: "Earn 구독 단계 (모바일)",
      },
    ],
    contribution: [
      "Earn UX 기획단계 참여 및 신규 개발",
      "Earn 펀드 마켓 리스트와 구독 모달 개발",
      "구독 input 컴포넌트 추상화 및 validation UX 개선",
      "모바일 대응 및 반응형 웹 개발",
      "상품 출시 이후 랜딩 페이지 개선 및 Earn 이벤트 팝업 개발",
    ],
  },
  {
    id: "coinvestor_quant",
    title: "Quant",
    date: "2023.03 ~ Current",
    images: [
      {
        src: "/images/quant-market.png",
        caption: "Quant 마켓 페이지 고도화",
      },
      {
        src: "/images/quant-quote.png",
        caption: "Quant 디테일 페이지 고도화 - 탭 메뉴 적용",
      },
      {
        src: "/images/quant-risk.png",
        caption: "Quant 디테일 페이지  - risk 메뉴",
      },
      {
        src: "/images/quant-header.png",
        caption: "Quant 헤더 개선 - 공용 펀드 스케줄 로직 적용",
      },
    ],
    description:
      "리브랜딩 이후 주력 상품인 퀀트의 고도화 및 성능 개선을 진행했습니다. 퀀트 상품은 사용자들이 자동으로 투자할 수 있는 서비스로, 사용자들이 투자를 위해 설정한 조건에 따라 자동으로 거래를 진행합니다.",
    contribution: [
      "리브랜딩 이후 페이지 UI 개선 및 성능 최적화",
      "펀드 스케줄에 따른 UI 상태 관리 공용 클래스, 메서드를 통해 개발 생산성 향상",
      "3가지(Quant, Spot, Earn) 펀드 상품 결제 기능 및 UI 공용 컴포넌트 개발",
      "Jamstack 적용하여 페이지 로딩 70% 단축하여 성능 개선",
      "서버 데이터 업데이트 시기에 맞춰 api 데이터 캐싱 및 재호출 로직 개발",
    ],
  },
  {
    id: "coinvestor_ui_library",
    title: "BCLabs UI Library",
    date: "2023.03 ~ Current",
    images: [
      {
        src: "/images/coinvestor-ui-library-1.png",
        caption: "디자인 시스템 시안",
      },
      {
        src: "/images/coinvestor-ui-library-4.png",
        caption: "스토리북 - Alert",
      },
      {
        src: "/images/coinvestor-ui-library-3.png",
        caption: "스토리북 - Button",
      },
      {
        src: "/images/coinvestor-ui-library-2.png",
        caption: "스토리북 - Toast ",
      },
    ],
    description:
      "리브랜딩 과정에서 bclabs 공용 UI 라이브러리를 개발했습니다. 초기 개발 이후 컴포넌트 추가 및 리팩터링을 진행하여 성능과 개발 사용성을 높일 수 있었습니다.",
    contribution: [
      "공용 UI 라이브러리 개발 및 리팩터링으로 월별 평균 Bugfix PR 42.1% 감소",
      "모달, 버튼 등 재사용성 높은 컴포넌트 및 공용 유틸 개발하여 개발 시간 30% 절감",
      "테일윈드의 utility class를 활용하여 디자인 시스템의 ui tokens 적용",
      "Storybook을 활용한 디자인 시스템 개발로 디자이너와의 효율적인 협업 강화\n",
    ],
  },
  {
    id: "coinvestor_rebranding",
    title: "Coinvestor Rebranding",
    date: "2022.11 ~ 2023.03",
    images: [
      {
        src: "/images/coinvestor-web.png",
        caption: "Coinvestor 리브랜딩 이후 랜딩",
      },
      {
        src: "/images/rebranding-1.png",
        caption: "Coinvestor 리브랜딩 Apply to be a trader 페이지",
      },
      {
        src: "/images/rebranding-2.png",
        caption: "My Wallet - 지갑(deposit) 기능 구현",
      },
      {
        src: "/images/rebranding-3.png",
        caption: "My Wallet - 출금(withdraw) 기능 구현",
      },
      {
        src: "/images/rebranding-4.png",
        caption: "My Wallet - 환전(convert) 기능 구현",
      },
      {
        src: "/images/rebranding-5.png",
        caption: "My Account - 유저 정보 수정 및 보안 설정 페이지",
      },
      {
        src: "/images/rebranding-6.png",
        caption: "Quant 상품 PNL 레포트 모달",
      },
      {
        src: "/images/rebranding-7.png",
        caption: "Quant 상품 디테일 페이지",
      },
    ],
    description: `기존 서비스 Playv에서 Coinvestor로 리브랜딩을 진행했습니다. 초기 기획 리뷰 및 개발에 참여하였으며 추후 기능 추가, 성능 개선 및 고도화를 진행했습니다`,
    contribution: [
      "랜딩, 펀드 마켓/디테일, 마이월렛, 유저 페이지 등 주요 페이지 신규 개발",
      "리브랜딩과 함께 Next.js로 마이그레이션으로 서버사이드 렌더링 도입",
      "Trader 사용자의 펀드 관리 생성 사이트 및 백오피스 별도 도메인으로 개발",
      "마이 월렛 페이지의 유저 환전, 송금 기능 구현 및 리팩터링을 통한 코드 개선",
      "커뮤니티 페이지 개발 이후 활성 사용자 15%, 참여 이벤트 65% 증가",
    ],
  },
  {
    id: "team-collab_contribution",
    title: "Team Co-op & Contribution",
    date: "",
    images: [
      {
        src: "/images/co-op-1.png",
        caption: "변경사항 문서화",
      },
      {
        src: "/images/co-op-2.png",
        caption: "프론트엔드 버전 히스토리 문서화",
      },
      {
        src: "/images/co-op-3.png",
        caption: "중요한 작업에 앞서 dev plan 작성",
      },
      {
        src: "/images/co-op-5.png",
        caption: "결제 기능 테스트 코드 도입",
      },
      {
        src: "/images/co-op-4.png",
        caption: "컨밴션에 맞춘 PR과 유닛 테스트 스크린샷 첨부",
      },
    ],
    description:
      "프론트엔드 팀 협업 문화를 개선하는데 기여했습니다. 부족했던 문서화 작업을 개선하고, 테스트 코드 도입과 등을 통해 협업 문화를 개선했습니다.",
    contribution: [
      "dev plan, 온보딩 문서화 및 세미나를 정착하여 기술 문화 개선을 주도했습니다.",
      "UI test 영상을 첨부하는 등 컨밴션에 충실하게 PR 작성을 작성했습니다.",
      "코드 리뷰와 유닛/통합 테스트 도입으로 잠재적 버그 발견 코드를 개선했습니다.",
      "개발 초기 단계의 리뷰에 참여해 프로젝트의 UX를 함께 개선했습니다.",
      "Figma, Confluence 등 문서를 기반으로 디자이너, 기획자와 협업했습니다.",
    ],
  },
];

export const PERSONAL_PROJECTS: ISectionItem[] = [
  {
    id: "soullink",
    date: "2023.06 ~ Current",
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

export const PROJECTS_PAGES: IProjectPageItem[] = [
  {
    id: "soullink_process",
    date: "2023.06 ~ Current",
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
