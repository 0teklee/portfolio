export const JOB_POSTS = [
  {
    id: "coinvestor_earn",
    date: "2024.03 ~ 2024.07",
    images: [
      {
        src: "/images/earn-screenshot.png",
        captions: {
          ko: "Earn 상품 출시",
          en: "Earn Product Launch",
        },
      },
      {
        src: "/images/earn-market.png",
        captions: {
          ko: "Earn 펀드 마켓 (웹 / 모바일)",
          en: "Earn Fund Market (Web / Mobile)",
        },
      },
      {
        src: "/images/earn-subscribe.png",
        captions: {
          ko: "Earn 구독 기능 (웹 / 모바일)",
          en: "Earn Subscription Features (Web / Mobile)",
        },
      },
      {
        src: "/images/earn-subscribe-steps.png",
        captions: {
          ko: "Earn 구독 단계 (모바일)",
          en: "Earn Subscription Steps (Mobile)",
        },
      },
    ],
    translations: {
      ko: {
        title: "Earn",
        description:
          "고정 수익형 펀드 상품 'Earn'을 위해 마켓과 구독 기능을 개발했습니다. 기존 퀀트 상품은 특정 기간에만 구독할 수 있는 문제가 있었지만, 이를 개선하여 언제든지 구독할 수 있도록 기획되었습니다.",
        contribution: [
          "Earn UX 기획단계 참여 및 신규 개발",
          "Earn 펀드 마켓 리스트와 구독 모달 개발",
          "구독 input 컴포넌트 추상화 및 validation UX 개선",
          "모바일 대응 및 반응형 웹 개발",
          "상품 출시 이후 랜딩 페이지 개선 및 Earn 이벤트 팝업 개발",
        ],
      },
      en: {
        title: "Earn",
        description:
          "Developed market and subscription features for the fixed-income fund product 'Earn'. Unlike previous quant products that could only be subscribed during specific periods, this was designed to allow subscriptions at any time.",
        contribution: [
          "Participated in Earn UX planning and new development",
          "Developed Earn fund market list and subscription modal",
          "Improved subscription input component abstraction and validation UX",
          "Developed mobile-responsive web",
          "Improved landing page and developed Earn event popup after product launch",
        ],
      },
    },
  },
  {
    id: "coinvestor_quant",
    date: "2023.03 ~ 2024.07",
    images: [
      {
        src: "/images/quant-market.png",
        captions: {
          ko: "Quant 마켓 페이지 고도화",
          en: "Quant Market Page Enhancement",
        },
      },
      {
        src: "/images/quant-quote.png",
        captions: {
          ko: "Quant 디테일 페이지 고도화 - 탭 메뉴 적용",
          en: "Quant Detail Page Enhancement - Tab Menu Applied",
        },
      },
      {
        src: "/images/quant-risk.png",
        captions: {
          ko: "Quant 디테일 페이지  - risk 메뉴",
          en: "Quant Detail Page - Risk Menu",
        },
      },
      {
        src: "/images/quant-header.png",
        captions: {
          ko: "Quant 헤더 개선 - 공용 펀드 스케줄 로직 적용",
          en: "Quant Header Improvement - Applied Shared Fund Schedule Logic",
        },
      },
    ],
    translations: {
      ko: {
        title: "Quant",
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
      en: {
        title: "Quant",
        description:
          "After rebranding, enhanced and optimized performance for the main product, Quant. Quant is a service allowing users to invest automatically based on the conditions they set.",
        contribution: [
          "Improved page UI and optimized performance post-rebranding",
          "Enhanced development efficiency through shared classes and methods for fund schedule-based UI state management",
          "Developed shared components for payment functionality and UI for three fund products (Quant, Spot, Earn)",
          "Applied Jamstack to improve page loading time by 70%",
          "Developed API data caching and recall logic aligned with server data update schedules",
        ],
      },
    },
  },
  {
    id: "coinvestor_ui_library",
    date: "2023.03 ~ Current",
    images: [
      {
        src: "/images/coinvestor-ui-library-1.png",
        captions: {
          ko: "디자인 시스템 시안",
          en: "Design System Prototype",
        },
      },
      {
        src: "/images/coinvestor-ui-library-4.png",
        captions: {
          ko: "스토리북 - Alert",
          en: "Storybook - Alert",
        },
      },
      {
        src: "/images/coinvestor-ui-library-3.png",
        captions: {
          ko: "스토리북 - Button",
          en: "Storybook - Button",
        },
      },
      {
        src: "/images/coinvestor-ui-library-2.png",
        captions: {
          ko: "스토리북 - Toast",
          en: "Storybook - Toast",
        },
      },
    ],
    translations: {
      ko: {
        title: "BCLabs UI Library",
        description:
          "리브랜딩 과정에서 bclabs 공용 UI 라이브러리를 개발했습니다. 초기 개발 이후 컴포넌트 추가 및 리팩터링을 진행하여 성능과 개발 사용성을 높일 수 있었습니다.",
        contribution: [
          "공용 UI 라이브러리 개발 및 리팩터링으로 월별 평균 Bugfix PR 42.1% 감소",
          "모달, 버튼 등 재사용성 높은 컴포넌트 및 공용 유틸 개발하여 개발 시간 30% 절감",
          "테일윈드의 utility class를 활용하여 디자인 시스템의 ui tokens 적용",
          "Storybook을 활용한 디자인 시스템 개발로 디자이너와의 효율적인 협업 강화\n",
        ],
      },
      en: {
        title: "BCLabs UI Library",
        description:
          "Developed the BCLabs shared UI library during the rebranding process. After the initial development, additional components and refactoring were carried out to enhance performance and usability.",
        contribution: [
          "Reduced monthly average Bugfix PRs by 42.1% through library development and refactoring",
          "Developed reusable components and shared utilities like modals and buttons to reduce development time by 30%",
          "Applied design system UI tokens using Tailwind's utility classes",
          "Enhanced collaboration with designers by developing a design system using Storybook",
        ],
      },
    },
  },
  {
    id: "coinvestor_rebranding",
    date: "2022.11 ~ 2023.03",
    images: [
      {
        src: "/images/coinvestor-web.png",
        captions: {
          ko: "Coinvestor 리브랜딩 이후 랜딩",
          en: "Coinvestor Post-Rebranding Landing Page",
        },
      },
      {
        src: "/images/rebranding-1.png",
        captions: {
          ko: "Coinvestor 리브랜딩 Apply to be a trader 페이지",
          en: "Coinvestor Rebranding - Apply to be a Trader Page",
        },
      },
      {
        src: "/images/rebranding-2.png",
        captions: {
          ko: "My Wallet - 지갑(deposit) 기능 구현",
          en: "My Wallet - Deposit Feature Implementation",
        },
      },
      {
        src: "/images/rebranding-3.png",
        captions: {
          ko: "My Wallet - 출금(withdraw) 기능 구현",
          en: "My Wallet - Withdrawal Feature Implementation",
        },
      },
      {
        src: "/images/rebranding-4.png",
        captions: {
          ko: "My Wallet - 환전(convert) 기능 구현",
          en: "My Wallet - Currency Conversion Feature Implementation",
        },
      },
      {
        src: "/images/rebranding-5.png",
        captions: {
          ko: "My Account - 유저 정보 수정 및 보안 설정 페이지",
          en: "My Account - User Info and Security Settings Page",
        },
      },
      {
        src: "/images/rebranding-6.png",
        captions: {
          ko: "Quant 상품 PNL 레포트 모달",
          en: "Quant Product PNL Report Modal",
        },
      },
      {
        src: "/images/rebranding-7.png",
        captions: {
          ko: "Quant 상품 디테일 페이지",
          en: "Quant Product Detail Page",
        },
      },
    ],
    translations: {
      ko: {
        title: "Coinvestor 리브랜딩",
        description:
          "기존 서비스 Playv에서 Coinvestor로 리브랜딩을 진행했습니다. 초기 기획 리뷰 및 개발에 참여하였으며 추후 기능 추가, 성능 개선 및 고도화를 진행했습니다.",
        contribution: [
          "랜딩, 펀드 마켓/디테일, 마이월렛, 유저 페이지 등 주요 페이지 신규 개발",
          "리브랜딩과 함께 Next.js로 마이그레이션으로 서버사이드 렌더링 도입",
          "Trader 사용자의 펀드 관리 생성 사이트 및 백오피스 별도 도메인으로 개발",
          "마이 월렛 페이지의 유저 환전, 송금 기능 구현 및 리팩터링을 통한 코드 개선",
          "커뮤니티 페이지 개발 이후 활성 사용자 15%, 참여 이벤트 65% 증가",
        ],
      },
      en: {
        title: "Coinvestor Rebranding",
        description:
          "Rebranded the service from Playv to Coinvestor. Participated in initial planning reviews and development, and later added features, improved performance, and enhanced functionality.",
        contribution: [
          "Developed key pages like Landing, Fund Market/Detail, My Wallet, and User Pages",
          "Introduced server-side rendering by migrating to Next.js during rebranding",
          "Developed separate domains for trader fund management site and back office",
          "Implemented and refactored features like currency conversion and transfers on the My Wallet page",
          "Increased active users by 15% and event participation by 65% after developing the community page",
        ],
      },
    },
  },
  {
    id: "team-collab_contribution",
    date: "",
    images: [
      {
        src: "/images/co-op-1.png",
        captions: {
          ko: "변경사항 문서화",
          en: "Documenting Changes",
        },
      },
      {
        src: "/images/co-op-2.png",
        captions: {
          ko: "프론트엔드 버전 히스토리 문서화",
          en: "Frontend Version History Documentation",
        },
      },
      {
        src: "/images/co-op-3.png",
        captions: {
          ko: "중요한 작업에 앞서 dev plan 작성",
          en: "Preparing Dev Plans Before Key Tasks",
        },
      },
      {
        src: "/images/co-op-5.png",
        captions: {
          ko: "결제 기능 테스트 코드 도입",
          en: "Introducing Test Code for Payment Features",
        },
      },
      {
        src: "/images/co-op-4.png",
        captions: {
          ko: "컨밴션에 맞춘 PR과 유닛 테스트 스크린샷 첨부",
          en: "PRs Aligned with Conventions and Unit Test Screenshots",
        },
      },
    ],
    translations: {
      ko: {
        title: "팀 협업 & 기여",
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
      en: {
        title: "Team Collaboration & Contribution",
        description:
          "Contributed to improving frontend team collaboration culture. Enhanced documentation efforts, introduced test code, and improved overall collaboration.",
        contribution: [
          "Led technical culture improvements by establishing dev plans, onboarding documentation, and seminars",
          "Wrote PRs adhering to conventions, including UI test videos",
          "Improved code by introducing unit/integration tests and participating in code reviews",
          "Collaborated on UX improvements during the early review stages of development",
          "Worked with designers and planners using tools like Figma and Confluence",
        ],
      },
    },
  },
];
