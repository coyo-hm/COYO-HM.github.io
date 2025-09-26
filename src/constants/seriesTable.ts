import { SeriesInfoTable } from "@src/types/series";

const SeriesTable: {
  published: SeriesInfoTable;
  unpublished: SeriesInfoTable;
} = {
  published: {
    trouble_shooting: {
      id: "trouble_shooting",
      title: "⚠️ Trouble Shooting Log",
      tags: [],
      description: "프로젝트 진행 도중 나오는 문제 해결 기록",
      thumbnail:
        "https://user-images.githubusercontent.com/56423604/283492423-a261b95e-c0e1-4651-9351-83fc538db17d.png",
      startDate: "2023-10-09T00:00:00.000Z",
      endDate: "2025-05-10T00:00:00.000Z",
      postIds: [
        "nextjs-large-page-data-warning",
        "mobile-full-view-height",
        "husky-precommit-unauthorized",
        "error-ts2802",
        "error-emeedauth",
        "assignInlineVars-to-client-from-server",
      ],
    },
    toy_project: {
      id: "toy_project",
      title: "Toy Project",
      tags: [],
      description: "소소한 프로젝트들",
      thumbnail:
        "https://github.com/COYO-HM/COYO-HM.github.io/assets/56423604/e5565bd4-839d-4c77-9bfc-600ea3990312",
      startDate: "2022-10-03T00:00:00.000Z",
      endDate: "2022-10-03T00:00:00.000Z",
      postIds: ["project-simple-kanban-board"],
    },
    network_note: {
      id: "network_note",
      title: "컴퓨터 네트워크 강의 정리",
      tags: ["network"],
      description: "컴퓨터 네트워크 강의 내용 정리하기",
      thumbnail:
        "https://github.com/COYO-HM/COYO-HM.github.io/assets/56423604/d1f6edca-b29b-4a4a-9149-314bc1e7b31a",
      startDate: "2024-01-04T00:00:00.000Z",
      endDate: "2024-02-20T00:00:00.000Z",
      postIds: ["network-note-01", "network-application-02"],
    },
    "commit-msg-management": {
      id: "commit-msg-management",
      title: "커밋 메세지 관리하기",
      tags: [
        "github",
        "git",
        "github_actions",
        "commitlint",
        "semantic-release",
      ],
      description: "커밋 메세지로 버전 관리와 변경 로그까지",
      thumbnail:
        "https://github.com/coyo-hm/COYO-HM.github.io/assets/56423604/116b115e-a767-4748-9705-482567e2aba7",
      startDate: "2023-09-25T00:00:00.000Z",
      endDate: "2024-03-14T00:00:00.000Z",
      postIds: ["semantic-release", "husky-commlint", "git-commit-template"],
    },
    code_snippets: {
      id: "code_snippets",
      title: "⌨️ Code Snippets",
      tags: [],
      description: "자주 사용하는 코드 조각 모음",
      thumbnail:
        "https://user-images.githubusercontent.com/56423604/283492780-cc0b2221-9cbf-497e-8ca1-a93c6539d3b6.png",
      startDate: "2023-03-30T00:00:00.000Z",
      endDate: "2023-03-30T00:00:00.000Z",
      postIds: ["reg-exp"],
    },
    blog: {
      id: "blog",
      title: "Blog 제작 과정",
      tags: [],
      description: "블로그 자체 제작기",
      thumbnail:
        "https://github.com/user-attachments/assets/47567c59-4a8c-47dc-ba42-8c97e8ec9595",
      startDate: "2022-10-23T00:00:00.000Z",
      endDate: "2025-01-31T00:00:00.000Z",
      postIds: [
        "utterances-to-giscus",
        "nextjs-large-page-data-warning",
        "nextjs-image-blur",
        "nextjs-gtag",
        "gatsby-add-table-of-contents-in-gatsby",
        "blog-version-2",
        "blog-ver-2-8",
        "blog-auto-deploy",
      ],
    },
  },
  unpublished: {
    trouble_shooting: {
      id: "trouble_shooting",
      title: "⚠️ Trouble Shooting Log",
      tags: [],
      description: "프로젝트 진행 도중 나오는 문제 해결 기록",
      thumbnail:
        "https://user-images.githubusercontent.com/56423604/283492423-a261b95e-c0e1-4651-9351-83fc538db17d.png",
      startDate: "2023-10-09T00:00:00.000Z",
      endDate: "2025-05-10T00:00:00.000Z",
      postIds: [
        "nextjs-large-page-data-warning",
        "mobile-full-view-height",
        "husky-precommit-unauthorized",
        "error-ts2802",
        "error-emeedauth",
        "assignInlineVars-to-client-from-server",
      ],
    },
    toy_project: {
      id: "toy_project",
      title: "Toy Project",
      tags: [],
      description: "소소한 프로젝트들",
      thumbnail:
        "https://github.com/COYO-HM/COYO-HM.github.io/assets/56423604/e5565bd4-839d-4c77-9bfc-600ea3990312",
      startDate: "2022-09-15T00:00:00.000Z",
      endDate: "2022-10-03T00:00:00.000Z",
      postIds: ["project-simple-kanban-board", "project-real-time-coin-info"],
    },
    network_note: {
      id: "network_note",
      title: "컴퓨터 네트워크 강의 정리",
      tags: ["network"],
      description: "컴퓨터 네트워크 강의 내용 정리하기",
      thumbnail:
        "https://github.com/COYO-HM/COYO-HM.github.io/assets/56423604/d1f6edca-b29b-4a4a-9149-314bc1e7b31a",
      startDate: "2024-01-04T00:00:00.000Z",
      endDate: "2024-02-20T00:00:00.000Z",
      postIds: ["network-note-01", "network-application-02"],
    },
    "commit-msg-management": {
      id: "commit-msg-management",
      title: "커밋 메세지 관리하기",
      tags: [
        "github",
        "git",
        "github_actions",
        "commitlint",
        "semantic-release",
      ],
      description: "커밋 메세지로 버전 관리와 변경 로그까지",
      thumbnail:
        "https://github.com/coyo-hm/COYO-HM.github.io/assets/56423604/116b115e-a767-4748-9705-482567e2aba7",
      startDate: "2023-09-25T00:00:00.000Z",
      endDate: "2024-03-14T00:00:00.000Z",
      postIds: ["semantic-release", "husky-commlint", "git-commit-template"],
    },
    code_snippets: {
      id: "code_snippets",
      title: "⌨️ Code Snippets",
      tags: [],
      description: "자주 사용하는 코드 조각 모음",
      thumbnail:
        "https://user-images.githubusercontent.com/56423604/283492780-cc0b2221-9cbf-497e-8ca1-a93c6539d3b6.png",
      startDate: "2023-03-30T00:00:00.000Z",
      endDate: "2023-03-30T00:00:00.000Z",
      postIds: ["reg-exp"],
    },
    blog: {
      id: "blog",
      title: "Blog 제작 과정",
      tags: [],
      description: "블로그 자체 제작기",
      thumbnail:
        "https://github.com/user-attachments/assets/47567c59-4a8c-47dc-ba42-8c97e8ec9595",
      startDate: "2022-10-23T00:00:00.000Z",
      endDate: "2025-01-31T00:00:00.000Z",
      postIds: [
        "utterances-to-giscus",
        "nextjs-large-page-data-warning",
        "nextjs-image-blur",
        "nextjs-gtag",
        "gatsby-add-table-of-contents-in-gatsby",
        "blog-version-2",
        "blog-ver-2-8",
        "blog-auto-deploy",
      ],
    },
  },
};
export default SeriesTable;
