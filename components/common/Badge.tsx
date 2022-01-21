import { Common } from "@types";
import React from "react";
import { useRecoilValue } from "recoil";
import { badgeItem } from "recoil/user-profile";
import style from "./Badge.module.scss";
import Text from "./Text";

type Props = { id: string };

const Badge = ({ id }: Props) => {
  const data = useRecoilValue(badgeItem(id));
  return (
    <a className={style.container} href="#">
      <label>
        <Text type={"tag"}>{data.name}</Text>
      </label>
    </a>
  );
};

export default Badge;
