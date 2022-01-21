import Heading from "components/common/Heading";
import PositionItem from "components/common/PositionItem";
import React from "react";
import { useRecoilValue } from "recoil";
import { positionIdList } from "recoil/user-profile";
import EditButton from "./EditButton";
import PositionEditor from "./modal/PositionEditor";
import style from "./UserPositionList.module.scss";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT

const UserPositionList = (props: Props) => {
  const positionList = useRecoilValue(positionIdList);
  return (
    <div className={style.container}>
      <div className={style.head_wrapper}>
        <Heading type="h4" color="primary">
          POSITION
        </Heading>
        <EditButton
          modalInfo={{
            title: "포지션 추가하기",
            body: <PositionEditor isEdit={false} />,
            icon: "new",
          }}
          text="포지션 추가하기"
        />
      </div>
      <div className={style.position_list_wrapper}>
        {positionList.map((it, idx) => (
          <PositionItem key={`position:${idx}`} id={it} />
        ))}
      </div>
    </div>
  );
};

export default UserPositionList;
