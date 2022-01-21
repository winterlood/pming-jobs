import { Common } from "@types";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from "recoil";
import { channelIdList, channelItem } from "recoil/user-profile";
import style from "./ChannelEditor.module.scss";
import { Spin, Button, Input } from "antd";
import { buttonLoadingState } from "recoil/app";

// ANTD

// COMPS

// STATICS

// TYPES

type Props =
  | {
      isEdit: true;
      originData: Common.OpenGraphItem;
    }
  | { isEdit: false };

// COMPONENT

const ChannelEditor = (props: Props) => {
  const [btnLoadingState, setBtnLoadingState] =
    useRecoilState(buttonLoadingState);
  const [localState, setLocalState] = useState<string>("");
  const onChange = (e) => {
    setLocalState(e.target.value);
  };

  const handleDelete = useRecoilCallback(({ snapshot, set, reset }) => () => {
    if (props.isEdit) {
      const originIdList = snapshot.getLoadable(channelIdList).contents;
      set(
        channelIdList,
        originIdList.filter((it) => String(it) !== String(props.originData.id))
      );
      reset(channelItem(props.originData.id));
    }
  });

  const handleSubmit = useRecoilCallback(({ snapshot, set }) => async () => {
    setBtnLoadingState(true);
    const res = await fetch(`/api/og?url=${localState}`).then((res) =>
      res.json()
    );
    const resObj = {
      title: res.title,
      thumbnailUrl: res.image.url,
      url: localState,
      origin: res.site_name,
    };
    setBtnLoadingState(false);

    if (props.isEdit) {
      // 기존 id에 수정
      set(channelItem(props.originData.id), resObj);
    } else {
      // 새로운 ids 아이템 추가, 해당 아이디에 매핑
      const newItemId = uuidv4();
      set(channelIdList, [
        ...snapshot.getLoadable(channelIdList).contents,
        newItemId,
      ]);
      set(channelItem(newItemId), { id: newItemId, ...resObj });
    }
  });

  useEffect(() => {
    if (props.isEdit) {
      setLocalState(props.originData.url);
    }
  }, [props]);

  return (
    <div>
      <Input value={localState} onChange={onChange} />
      {btnLoadingState ? (
        <Spin />
      ) : (
        <Button onClick={handleSubmit}>저장</Button>
      )}
      {props.isEdit && <Button onClick={handleDelete}>삭제</Button>}
    </div>
  );
};

export default ChannelEditor;
