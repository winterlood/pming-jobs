import React from "react";
import style from "./UserProfile.module.scss";

import dynamic from "next/dynamic";
import { Avatar, Button } from "antd";

import Text from "components/common/Text";
import ProfileLayout from "components/layout/ProfileLayout";
import Badge from "components/common/Badge";
import Heading from "components/common/Heading";
import OpenGraph from "components/common/OpenGraph";
import PositionItem from "components/common/PositionItem";
import TehcnologyTab from "components/user/profile/TehcnologyTab";
import ExperienceTimeline from "components/user/profile/ExperienceTimeline";
import EditableIntroduce from "components/user/UserIntroduce";

import { profile } from "data/dummy";
import UserIntroduce from "components/user/UserIntroduce";
import UserChannelList from "./UserChannelList";
import UserPositionList from "./UserPositionList";
import UserHeader from "./UserHeader";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT

const isEdit = true;
const data = profile;
const CircleChart = dynamic(
  () => import("components/user/profile/CircleChart"),
  { ssr: false }
);

const EditModal = dynamic(() => import("components/user/EditModal"), {
  ssr: false,
});
const UserProfile = (props: Props) => {
  return (
    <>
      <EditModal />
      <div
        style={{ backgroundImage: `url('${data.privateBannerUrl}')` }}
        className={style.banner}
      ></div>
      <ProfileLayout>
        <div className={style.container}>
          {/* AVATAR ROW */}
          <div className={style.avatar_section}>
            <Avatar className={style.avatar} src={data.user.avatar_url} />
          </div>
          {/* HEAD */}
          <div className={style.btn_section}>
            <div className={style.btn_row}>
              <div className={style.btn_wrapper}>
                <Button
                  type="primary"
                  onClick={() =>
                    alert("기능 준비 중 입니다! 양해 부탁드립니다 😥")
                  }
                >
                  <Text type={"btn"} color={"white"}>
                    메세지 보내기
                  </Text>
                </Button>
                <Button
                  type="default"
                  onClick={() =>
                    alert("기능 준비 중 입니다! 양해 부탁드립니다 😥")
                  }
                >
                  <Text type={"btn"} color={"default"}>
                    PDF 다운로드
                  </Text>
                </Button>
              </div>
            </div>
          </div>
          {/* INFO */}
          <header className={style.head_section}>
            <UserHeader />
          </header>
          <section id="section_introduce" className={style.introduce_section}>
            <UserIntroduce data={data.user.introduce} />
          </section>
          <section id="section_channel" className={style.channel_section}>
            <UserChannelList />
          </section>
          <section id="section_position" className={style.position_section}>
            <UserPositionList />
          </section>
          <section id="section_skill" className={style.skill_section}>
            <Heading type="h2" label={"GitHub Data가 연동되었습니다"}>
              Skills
            </Heading>
            <section>
              <Heading type="h4">Languages</Heading>
              <div className={style.language_wrapper}>
                <div className={style.language_graph_wrapper}>
                  <CircleChart lanagaugeList={data.skill.languageList} />
                </div>
                <div className={style.language_list_wrapper}>
                  {data.skill.languageList.map((it, idx) => (
                    <div
                      className={style.language_list_item}
                      key={`language:${idx}`}
                    >
                      <span
                        style={{ backgroundColor: it.color }}
                        className={["dot", style.dot].join(" ")}
                      ></span>
                      <Text type={"text"} size={"sm"}>
                        {it.name}
                      </Text>
                      <Text type={"text"} size={"tiny"} color="gray">
                        {it.bytes} Bytes
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section>
              <TehcnologyTab
                technologyCollection={data.skill.technolohyCollection}
              />
            </section>
          </section>
          <section id="section_experience" className={style.experience_section}>
            <Heading type="h2" label={"GitHub Data가 연동되었습니다"}>
              Experience
            </Heading>
            <ExperienceTimeline experienceList={data.experienceList} />
          </section>
        </div>
      </ProfileLayout>
    </>
  );
};

export default UserProfile;
