import { Profile } from "@types";

export const profile: Profile.Profile = {
  privateBannerUrl:
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600",
  user: {
    name: "이정환",
    nickName: "Winterlood",
    email: "king199777@gmail.com",
    avatar_url: "https://avatars.githubusercontent.com/u/46296754?v=4",
    introduce: `
  안녕하세요 저는 TypeScript & React.js & Next.js 기반의 프론트 엔드 개발자입니다.
  <br>
  22Hours의 CTO로 2년째 활동 중이며, 주니어 개발자 Q&A 서비스 DEVSTU를 기획 및 개발하고 운영하고 있습니다.
  <br>
  개발자들을 위한 개발자로 살아가고 있으며, 개인적으로 Udemy나 인프런에 React 강의를 출판하기도 했습니다.
  <br>
  효율적이고 생산적인 시간과 대화를 좋아합니다. 그러나 가끔은 시시콜콜한 농담도 좋습니다 :)
  <br>
  저에대해 더 알고 싶으시다면, 아래 내용을 꼭 읽어주세요 🙋‍♂️
    `,
  },
  badgeList: [
    {
      id: "1",
      name: "FrontEnd",
      icon: "🚀",
    },
    {
      id: "2",
      name: "God Commiter",
      icon: "💫",
    },
    {
      id: "3",
      name: "Military Fulfiiled",
      icon: "🌏",
    },
  ],
  channelList: [
    {
      id: "1",
      origin: "youtube.com",
      title: "WINTERLOOD (코딩하는 이선생)",
      url: "https://www.youtube.com/channel/UCn7yFtl60fQsRtEaoyuzFUg",
      thumbnailUrl:
        "https://scrap.kakaocdn.net/dn/dyfbnI/hyMTOSWtsY/yFlPYSlskhJLZXRZSbKuV1/img.jpg?width=900&height=900&face=317_525_557_787",
    },
  ],
  positionList: [
    {
      title: "CTO | Frontend 개발",
      orgName: "22Hours",
      orgIconUrl: "https://22h-landing-carrier.vercel.app/img/simri/logo.png",
      period: {
        start: "2019.10",
        end: "현재",
      },
      summary: "Udemy 최초 한국어 리액트 강의 출판",
      content: `
      <ul>
      <li>프론트엔드 코드리뷰 & 테스트코드 등 개발환경 개선</li>
      <li>서비스 아키텍쳐 & 보안 개선</li>
      <li>IT 외주 사업 기술적 견적 및 기간 산출</li>
      <li>신규 사업 기획 및 기술 가능성 검토</li>
      </ul>
      `,
    },
    {
      title: "한 입 크기로 잘라먹는 리액트 강사",
      orgName: "인프런",
      orgIconUrl:
        "https://cdn.inflearn.com/public/main/profile/default_profile.png",
      period: {
        start: "2022.01",
        end: "2022.02 (예정)",
      },
      summary: "APPLE TV 프론트엔드 개발자로 근무",
      content: `
      <ul>
      <li>2월 초 출판예정</li>
      </ul>
      `,
    },
    {
      title: "한 입 크기로 잘라먹는 리액트 강사",
      orgName: "Udemy",
      orgIconUrl:
        "https://styles.redditmedia.com/t5_2xros/styles/communityIcon_7taqxfw07mb71.png",
      period: {
        start: "2021.10",
        end: "2021.12",
      },
      summary: "Udemy 최초 한국어 리액트 강의 출판",
      content: `
      <ul>
      <li>Udemy 최초 한국어 리액트 강의 출판</li>
      <li>출시 2달 만에 웹개발 TOP 5 등극</li>
      <li>350명의 수강생, 80개의 리뷰</li>
      </ul>
      `,
    },
  ],
  skill: {
    isGitHubConnect: true,
    gitHubLastUpdateDate: "today",
    languageList: [
      { color: "#2b7489", name: "TypeScript", bytes: 134124 },
      { color: "#f1e05a", name: "JavaScript", bytes: 124124 },
      { color: "#e34c26", name: "HTML", bytes: 55592 },
      { color: "#563d7c", name: "CSS", bytes: 5000 },
      { color: "#3572A5", name: "Python", bytes: 3523 },
      { color: "#c6538c", name: "SCSS", bytes: 2022 },
    ],
    technolohyCollection: [
      {
        name: "FrontEnd",
        tehcNologyList: [
          {
            name: "React.js",
            summary: "메인 기술 스택 ⭐⭐⭐",
            descript: `
            <ul>
            <li>인프런, 유데미 <a href='https://www.udemy.com/course/winterlood-react-basic/' target='_blank'>"한 입 크기로 잘라먹는 리액트"</a> 강의 출판 및 인사이트 출판 예정</li>
            <li>State Managaement :  Context & Recoil 선호</li>
            <li>Style : module sass 방식 선호</li>
            <li>webpack, vite, parcel 사용 경험 보유</li>
            </ul>
            `,
            iconUrl:
              "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
          },
          {
            name: "Node.js",
            summary: "메인 기술 스택 ⭐⭐⭐",
            descript: `
            <ul>
            <li>Open Graph 크롤링 서버 개발</li>
            <li>GitHub API V2. GrpahQL Fetcher 개발</li>
            <li>EJS 엔진 이용, 오픈소스 
            <a 
            href='https://github.com/winterlood/readme-stickers' 
            target='_blank'>
            README STICKER 
            </a>
             개발
            </li>
            </ul>
            `,
            iconUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2cMScNMTqQ_GBe9KkVY7aQPJeSa374mAZnGUYhf6tvm6VKPYgwz07QTXEaJ0JDLtna0&usqp=CAU",
          },
          {
            name: "Next.js",
            summary: "메인 기술 스택 ⭐⭐",
            iconUrl:
              "https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg",
            descript: `
            <ul>
            <li>인프런 "Next.js Typescript 블로그 만들기" 강의 출판 예정</li>
            <li>SSR & Universial Rendering 관련 강의 출판 예정</li>
            </ul>
            `,
          },
          {
            name: "ReactNative",
            summary: "서브 기술 스택 ⭐",
            descript: `
            <ul>
            <li>
            <a 
            href='https://play.google.com/store/apps/details?id=com.cherrypick_it' 
            target='_blank'>
            [체리픽 IT]
            </a>
             : 실시간 IT 뉴스 애그리게이팅 앱 
            1인 기획, 디자인, 개발 및 운영 (언론사 뉴스 협약 완료)
            </li>
            <li>
            <a 
            href='https://play.google.com/store/apps/details?id=com.developer_console' 
            target='_blank'>
            [Developer Console]
            </a>
             : 개발자 도구 앱
            1인 기획, 디자인, 개발 및 운영 (다운로드 3천회 이상)
            </li>
            <li><a href='https://play.google.com/store/apps/developer?id=22Hours' target='_blank'>개인 수익형 어플리케이션</a>1인 기획, 디자인, 개발 및 운영</li>
            </ul>
            `,
            iconUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKAiyBpEdxOjGDKr5zffZT7rk29JaAtK_O5VNbcRY92Fjj-k1XXqpJgi5wRQYXtvsjpo&usqp=CAU",
          },
          {
            name: "Python",
            summary: "서브 기술 스택 ⭐",
            descript: `
            <ul>
            <li>
            크몽 파이썬 크롤러 제작 서비스 운영
            </li>
            <li>
            GitHub Action cron 이용하여 실시간 뉴스 수집기 제작 경험 보유
            <a 
            href='https://github.com/winterlood/cherrypick_it' 
            target='_blank'>
            체리픽 IT 자동 크롤러
            </a>
            </li>
            </ul>
            `,
            iconUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
          },
        ],
      },
      {
        name: "DevOps",
        tehcNologyList: [
          {
            name: "GitHub",
            summary: "형상관리 & 업무현황파악 및 관리",
            descript: `
          <ul>
          <li>
          <a 
          href='https://github.com/winterlood' 
          target='_blank'>
          winterlood github profile
          </a>
          </li>
          <li>
          GitHub Action cron 이용하여 실시간 뉴스 수집기 제작 경험 보유
          <a 
          href='https://github.com/winterlood/cherrypick_it' 
          target='_blank'>
          체리픽 IT 자동 크롤러
          </a>
          </li>
          </ul>`,
            iconUrl:
              "https://cdn3.iconfinder.com/data/icons/inficons/512/github.png",
          },
          {
            name: "Firebase",
            summary:
              "사용 및 경험 솔루션 : hosting, firestore, authenticated, analytics, admob",
            iconUrl:
              "https://firebase.google.cn/images/brand-guidelines/logo-vertical.png?hl=ko",
          },
          {
            name: "Vercel",
            summary: "사용 및 경험 솔루션 : next.js serverless lambda hosting",
            iconUrl:
              "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/dtokjerhk1dxyludtlwc",
          },
          {
            name: "Netlify",
            summary: "사용 및 경험 솔루션 : hosting",
            iconUrl:
              "https://progsoft.net/images/netlify-icon-54b6647631b25775040392de1e83063842c4dc1e.jpg",
          },
          {
            name: "AWS",
            summary: "사용 및 경험 솔루션 : EC2, Elastic IP",
            iconUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJd4rF-Nwco2uyeooTaaR7sgalSJbepVZy0VCwTr0htCPqZa0K0D3_ybsmjE-m_K7yWM&usqp=CAU",
          },
          {
            name: "Nginx",
            summary: "reverse proxy",
            iconUrl:
              "https://i1.wp.com/embraceyourtechnolust.com/wp-content/uploads/2020/02/NGINX-hex-logo.png?resize=211%2C239&ssl=1",
          },
        ],
      },
      {
        name: "Design",
        tehcNologyList: [
          {
            name: "Adobe XD",
            summary: "서비스 기획 및 디자인 문서 작성",
            iconUrl:
              "https://play-lh.googleusercontent.com/kaox1VteLsWAuNxPxhm8t4llaoyFhxzDjo9g4Hdf92bKdT_Sn6Yrdku6rApuc5ktirw",
          },
          {
            name: "Adobe Illustrator",
            summary:
              "(개발과 크게 관련 없음) 서비스 로고 및 썸네일 등 일러스트 제작",
            iconUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Illustrator_CC_icon.png/492px-Illustrator_CC_icon.png",
          },
        ],
      },
    ],
  },
  experienceList: [
    {
      type: "other",
      created_date: "today",
      isHighlighted: true,
      feedTagList: [
        {
          id: "exp_label_lecture",
          name: "강의 출판",
          backgroundColor: "#F3EDFF",
          color: "#8C4CFF",
        },
        {
          id: "exp_label_hightlight",
          name: "하이라이트",
          backgroundColor: "#F3EDFF",
          color: "#8C4CFF",
        },
      ],
      descript: `
      <div>
      <!--block-->
      안녕하세요 여러분!
      <br>
      오늘 드디어 제 강의가 Udemy에 오픈 되었습니다!
      <br>
      강의 많이 들어주세요 감사합니다!
      <br/>
      <a href='https://www.udemy.com/course/winterlood-react-basic/' target='_blank'>한 입 크기로 잘라먹는 리액트</a>
      </div>
      `,
      media: {
        imageList: [
          "https://user-images.githubusercontent.com/46296754/145671738-916784ea-ef0b-4445-b989-83404e4ab495.png",
        ],
      },
    },
    {
      type: "project",
      feedTagList: [
        {
          id: "exp_label_sideproj",
          name: "사이드 프로젝트",
          backgroundColor: "#F3EDFF",
          color: "#8C4CFF",
        },
        {
          id: "exp_label_hightlight",
          name: "하이라이트",
          backgroundColor: "#F3EDFF",
          color: "#8C4CFF",
        },
      ],
      created_date: "today",
      isHighlighted: true,
      headInfo: {
        logoUrl:
          "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-1/p200x200/113571435_136077674822264_6082406855605301246_n.png?_nc_cat=102&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=-aksQAQsSk0AX8n6zRQ&_nc_ht=scontent-gmp1-1.xx&oh=00_AT8FMdqSCzpiYPjRrMCB_2Ilbl0lsmrtADcdUs_4LHtTpw&oe=61FA6524",
        title: "DEVSTU",
        summary: "대한민국 개발자를 위한 질문답변 서비스",
        descript:
          "스택오버플로우에 맨날 올리던 영어 질문은 이제 그만\nDEVSTU에서 한국어로 된 질문과 답변을 즐겨보세요",
        serviceUrlList: [
          {
            id: "1",
            title: "DEVSTU",
            url: "https://devstu.co.kr",
            thumbnailUrl: "https://devstu.co.kr/img/og.png",
            origin: "https://devstu.co.kr",
          },
        ],
        role: "서비스 기획",
        colaboratorList: [],
      },
      gitHubInfo: {
        url: "https://github.com/22hours/devstu-front-end",
        isPrivate: true,
        repoStat: [
          {
            name: "Contributors",
            count: 22,
          },
          {
            name: "Star",
            count: 22,
          },
          {
            name: "Issue",
            count: 22,
          },
          {
            name: "Watches",
            count: 22,
          },
        ],
        contributionStat: {
          contributionPercent: 25.37,
          totalCommit: 887,
          myCommit: 225,
        },
        languageStat: [
          {
            name: "TypeScript",
            bytes: 790002,
            color: "#2b7489",
          },
          {
            name: "SCSS",
            bytes: 128022,
            color: "#c6538c",
          },
          {
            name: "JavaScript",
            bytes: 20045,
            color: "#f1e05a",
          },
        ],
        topicList: [
          {
            name: "React.js",
            stargazerCount: 63240,
            relatedTopics: ["angular", "react-native", "vue"],
          },
          {
            name: "css",
            stargazerCount: 61223,
            relatedTopics: ["html", "javascript", "bootstrap"],
          },
        ],
      },
      projectInfo: {
        videoUrl: "https://www.youtube.com/embed/gHb-mR7-Gh4",
        imageList: ["https://i.ytimg.com/vi/51mI7mUiAZA/maxresdefault.jpg"],
      },
    },
  ],
};
