import Badge from "components/common/Badge";
import Heading from "components/common/Heading";
import Head from "next/head";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  badgeIdList,
  privateBannerState,
  userState,
} from "recoil/user-profile";
import style from "./UserHeader.module.scss";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT

const UserHeader = (props: Props) => {
  const privateBanner = useRecoilValue(privateBannerState);
  const data = useRecoilValue(userState);
  const badgeList = useRecoilValue(badgeIdList);

  const ogObj = {
    title: `${data.name}(${data.nickName})의 프로필`,
    image: privateBanner,
    description: data.introduce,
  };
  return (
    <div>
      <Head>
        <title>
          {data.name}({data.nickName})의 프로필
        </title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ogObj.title} />
        <meta property="og:image" content={ogObj.image} />
        <meta property="og:description" content={ogObj.description} />
        <meta property="og:site_name" content="22hours" />
        <meta property="og:locale" content="ko_KR" />
      </Head>
      <Heading type="h2">
        {data.name} | {data.nickName}
      </Heading>
      <div className={style.badge_list_wrapper}>
        {badgeList.map((it) => (
          <Badge key={`profile_badge_${it}`} id={it} />
        ))}
      </div>
    </div>
  );
};

export default UserHeader;
