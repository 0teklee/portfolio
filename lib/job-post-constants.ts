import { ISectionItem } from "@/lib/types";

export const JOB_EXP_COINVESTOR: ISectionItem[] = [
  {
    id: "coinvestor_earn",
    title: "Earn",
    date: "2024.03 ~ 2024.07",
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
    date: "2023.03 ~ 2024.07",
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
    id: "documentation",
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
