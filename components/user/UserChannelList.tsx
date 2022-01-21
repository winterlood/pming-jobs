import OpenGraph from "components/common/OpenGraph";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { channelIdList } from "recoil/user-profile";
import style from "./UserChannelList.module.scss";
import UserChannelItem from "./UserChannelItem";
import EditButton from "./EditButton";
import Heading from "components/common/Heading";
import ChannelEditor from "./modal/ChannelEditor";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT

const UserChannelList = (props: Props) => {
  const channelList = useRecoilValue(channelIdList);

  return (
    <div className={style.container}>
      <div className={style.head_wrapper}>
        <Heading type="h4" color="primary">
          CHANNEL
        </Heading>
        <EditButton
          modalInfo={{
            title: "채널 추가하기",
            body: <ChannelEditor isEdit={false} />,
            icon: "new",
          }}
          text="채널 추가하기"
        />
      </div>
      <div className={style.channel_list_wrapper}>
        {channelList.map((it, idx) => (
          <UserChannelItem key={`ogcontent:${idx}`} id={it} />
        ))}
      </div>
    </div>
  );
};

export default UserChannelList;
