declare module "@types" {
  export namespace EditProfile {
    interface EditableCompProps {
      [prop: string]: any;
    }

    interface VisibleModalState {
      visible: true;
      info: {
        title: string;
        body: ReactNode;
      };
    }

    interface InvisibleModalState {
      visible: false;
    }

    type ModalState = VisibleModalState | InvisibleModalState;

    interface showModal {
      (title: string, info: ReactNode): void;
    }
  }

  export namespace UserProfile {
    type Experience = {
      title: string;
      descript: string;
    };
  }

  /*
   * COMMON DATA DTO
   */
  export namespace Common {
    type OpenGraphItem = {
      id: string;
      title: string;
      thumbnailUrl: string;
      url: string;
      origin: string;
    };

    type UserTag = {
      id: string;
      profileUrl: string;
      name: string;
    };

    type ProfileBadge = {
      id: string;
      name: string;
      icon?: string;
    };

    type FeedTag = {
      id: string;
      name: string;
      backgroundColor: string;
      color: string;
    };

    type TechnologyCollection = {
      name: string;
      tehcNologyList: TechnologyItem[];
    };

    type TechnologyItem = {
      name: string;
      summary?: string;
      descript?: string;
      iconUrl?: string;
    };

    type ProjectInfoContent =
      | {
          type: "image";
          imageUrlList: string[];
        }
      | { type: "video"; videoUrl: string }
      | { type: "descript"; content: string };

    interface ExperienceBase {
      feedTagList: FeedTag[];
      created_date: string;
      isHighlighted: boolean;
    }

    interface ExperienceWithProject extends ExperienceBase {
      type: "project";
      headInfo: {
        logoUrl: string;
        title: string;
        summary: string;
        descript: string;
        serviceUrlList: OpenGraphItem[];
        role: string;
        colaboratorList: UserTag[];
      };
      gitHubInfo?: GitHubData.RepoData;
      projectInfo: {
        imageList?: string[];
        videoUrl?: string;
        descript?: string;
      };
    }

    interface ExperienceWithOther extends ExperienceBase {
      type: "other";
      descript: string;
      media: {
        imageList?: string[];
        videoUrl?: string;
      };
    }

    type Experience = ExperienceWithOther | ExperienceWithProject;
  }

  /*
   * GITHUB DATA DTO
   */
  export namespace GitHubData {
    type LanguageItem = {
      name: string;
      bytes: number;
      color: string;
    };

    type StatItem = {
      name: string;
      count: number;
    };

    type TopicItem = {
      name: string;
      stargazerCount: number;
      relatedTopics: string[];
    };

    type RepoData = {
      url: string;
      isPrivate?: boolean;
      repoStat: StatItem[];
      contributionStat: {
        contributionPercent: number;
        totalCommit: number;
        myCommit: number;
      };
      languageStat: LanguageItem[];
      topicList: TopicItem[];
    };
  }

  /*
   * USER PROFILE DATA DTO
   */
  export namespace Profile {
    type Profile = {
      id: string;
      privateBannerUrl: string;
      user: User;
      badgeList: Common.ProfileBadge[];
      channelList: Common.OpenGraphItem[];
      positionList: Position[];
      skill: Skill;
      experienceList: Common.Experience[];
    };

    type User = {
      name: string;
      nickName: string;
      email: string;
      avatar_url: string;
      introduce: string;
    };

    type Position = {
      title: string;
      orgName: string;
      orgIconUrl: string;
      period: {
        start: string;
        end: string;
      };
      summary: string;
      content?: string;
    };

    type Skill = {
      isGitHubConnect: boolean;
      gitHubLastUpdateDate: string;
      languageList: GitHubData.LanguageItem[];
      technolohyCollection: Common.TechnologyCollection[];
    };

    type Experience = {};
  }
}
