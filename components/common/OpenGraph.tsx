import React from "react";
import style from "./OpenGraph.module.scss";

// components
import Heading from "components/common/Heading";
import Text from "components/common/Text";
import { Common } from "@types";
import { useRecoilValue } from "recoil";
import { channelItem } from "recoil/user-profile";

type Props = Common.OpenGraphItem;

const OpenGraph = (props: Props) => {
  const { title, thumbnailUrl, url, origin } = props;

  return (
    <figure>
      <a
        className={style.container}
        href={url}
        target={"_blank"}
        rel="noreferrer"
      >
        <div
          className={style.img_col}
          style={{ backgroundImage: `url('${thumbnailUrl}')` }}
        ></div>
        <div className={style.info_col}>
          <Text type={"text"} color="default" size={"base"} weight="bold">
            {title}
          </Text>
          <Text type={"text"} size={"sm"} color="gray">
            {origin}
          </Text>
        </div>
      </a>
    </figure>
  );
};

export default OpenGraph;
