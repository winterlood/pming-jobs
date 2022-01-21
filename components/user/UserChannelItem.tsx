import { Button, Input } from "antd";
import OpenGraph from "components/common/OpenGraph";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { channelItem, editModeState } from "recoil/user-profile";
import EditButton from "./EditButton";
import ChannelEditor from "./modal/ChannelEditor";
import style from "./UserChannelItem.module.scss";

// ANTD

// COMPS

// STATICS

// TYPES
type Props = {
  id: string;
};

// COMPONENT
const UserChannelItem = ({ id }: Props) => {
  const isEdit = useRecoilValue(editModeState);
  const data = useRecoilValue(channelItem(id));
  return (
    <div className={style.container}>
      <div className={style.content_wrapper}>
        <OpenGraph {...data} />
      </div>
      {isEdit && (
        <div className={style.edit_button_wrapper}>
          <EditButton
            modalInfo={{
              title: "채널 수정하기",
              body: <ChannelEditor isEdit={true} originData={data} />,
            }}
            text="수정"
          />
        </div>
      )}
    </div>
  );
};

export default UserChannelItem;
