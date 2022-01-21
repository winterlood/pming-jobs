import React, { ReactNode } from "react";
import { Common } from "@types";
import style from "./ExpItemWithProject.module.scss";
import Text from "./Text";
import Heading from "./Heading";
import OpenGraph from "./OpenGraph";
import CircleChart from "components/user/profile/CircleChart";
import BarChart from "components/user/profile/BarChart";
import MediaList from "components/user/profile/MediaList";
import ImageSlider from "components/common/ImageSlider";
import VideoContainer from "./VideoContainer";
import { Image } from "antd";

const ExpTag = (props: Common.FeedTag) => {
  return (
    <a
      className={style.exp_tag}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <Text type={"text"} size={"tiny"} weight={"bold"} color={props.color}>
        {props.name}
      </Text>
    </a>
  );
};

const LabeledDiv = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className={style.labeled_div}>
      <div className={style.label}>
        <Text type={"text"} size={"sm"} color="gray">
          {label}
        </Text>
      </div>
      {children}
    </div>
  );
};

type Props = Common.ExperienceWithProject;
const ExpItemWithProject = (props: Props) => {
  const { headInfo, feedTagList, created_date, gitHubInfo, projectInfo } =
    props;
  return (
    <div className={style.container}>
      {/* head */}
      <section className={style.head_div}>
        <div className={style.head_info}>
          <div
            className={style.logo_img}
            style={{ backgroundImage: `url('${headInfo.logoUrl}')` }}
          ></div>
          <div className={style.info}>
            <Heading type={"h3"}>{headInfo.title}</Heading>
            <Text type={"text"} size={"sm"} color="gray">
              {headInfo.summary}
            </Text>
          </div>
        </div>
      </section>

      {/* info */}
      <section className={style.info_div}>
        <div className={style.info_descript}>
          <LabeledDiv label={"서비스 소개"}>
            <Text type={"text"} size={"base"} weight={"medium"} color="default">
              {headInfo.descript}
            </Text>
          </LabeledDiv>
        </div>
        <div className={style.info_og}>
          <LabeledDiv label={"서비스 접속정보"}>
            {headInfo.serviceUrlList.map((it, idx) => (
              <OpenGraph key={`service_og_${headInfo.title}:${idx}`} {...it} />
            ))}
          </LabeledDiv>
        </div>
        <div className={style.info_role}>
          <LabeledDiv label={"맡은 역할"}>
            <Text type={"text"} size={"base"} weight={"medium"} color="default">
              {headInfo.role}
            </Text>
          </LabeledDiv>
        </div>
        <div className={style.info_colab}>
          <LabeledDiv label={"협업자"}>
            <Text type={"text"} size={"base"} weight={"medium"} color="default">
              개인 프로젝트
            </Text>
          </LabeledDiv>
        </div>
      </section>

      {/* repo */}
      <section className={style.repo_div}>
        <Heading type={"h4"}>RepoData</Heading>

        <div className={style.repo_connect}>
          <LabeledDiv label={"연동된 저장소"}>
            <Text type={"text"} size={"base"} weight={"medium"} color="default">
              {gitHubInfo.url}
            </Text>
          </LabeledDiv>
        </div>
        <div className={style.repo_stat}>
          <LabeledDiv label={"저장소 스탯"}>
            <ul>
              {gitHubInfo.repoStat.map((it, idx) => (
                <li key={`stat_${gitHubInfo.url}_${idx}`}>
                  <Text
                    type={"text"}
                    size={"base"}
                    weight={"medium"}
                    color="default"
                  >
                    {it.count} {it.name}
                  </Text>
                </li>
              ))}
            </ul>
          </LabeledDiv>
        </div>
        <div className={style.repo_contribution}>
          <LabeledDiv label={"기여도"}>
            <div className={style.contribution_wrapper}>
              <div className={style.chart_wrapper}>
                <CircleChart lanagaugeList={gitHubInfo.languageStat} />
              </div>
              <div className={style.chart_info}>
                <Text
                  type={"text"}
                  size={"lg"}
                  weight={"medium"}
                  color="default"
                >
                  {gitHubInfo.contributionStat.contributionPercent}% 기여
                </Text>
                <Text type={"text"} size={"base"} color="gray">
                  저장소 전체 커밋 : {gitHubInfo.contributionStat.totalCommit}
                </Text>
                <Text type={"text"} size={"base"} color="gray">
                  나의 커밋 : {gitHubInfo.contributionStat.myCommit}
                </Text>
              </div>
            </div>
          </LabeledDiv>
        </div>
        <div className={style.repo_code}>
          <LabeledDiv label={"저장소 코드"}>
            <div className={style.chart_wrapper}>
              <BarChart lanagaugeList={gitHubInfo.languageStat} />
            </div>
          </LabeledDiv>
        </div>
      </section>

      {/* media */}
      <section className={style.media_div}>
        <Heading type={"h4"}>Project Info</Heading>

        {/* Video */}
        {projectInfo.videoUrl && (
          <LabeledDiv label={"서비스 영상"}>
            <VideoContainer videoLink={projectInfo.videoUrl} />
          </LabeledDiv>
        )}

        {/* Image */}
        {projectInfo.imageList && (
          <LabeledDiv label={"서비스 이미지"}>
            {projectInfo.imageList.map((it, idx) => (
              <Image
                key={`image_${idx}`}
                className={style.service_image_wrapper}
                alt={it}
                src={it}
              />
            ))}
            {/* <ImageSlider imageList={projectInfo.imageList} /> */}
          </LabeledDiv>
        )}

        {/* Description */}

        {projectInfo.descript && (
          <LabeledDiv label={"서비스 설명"}>
            <div></div>
          </LabeledDiv>
        )}
      </section>
    </div>
  );
};

export default ExpItemWithProject;
