import { Common } from "@types";
import { Image } from "antd";
import React from "react";
import style from "./ExpItemWithOther.module.scss";
import Text from "./Text";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = Common.ExperienceWithOther;

// COMPONENT

const ExpItemWithOther = (props: Props) => {
  return (
    <div className={style.container}>
      <div className={style.body_wrapper}>
        <Text type={"text"} size={"base"}>
          <div dangerouslySetInnerHTML={{ __html: props.descript }}></div>
        </Text>
      </div>
      <div className={style.media_wrapper}>
        {props.media.imageList &&
          props.media.imageList.map((it, idx) => (
            <Image key={`image_${idx}`} src={it} alt={it} />
          ))}
      </div>
    </div>
  );
};

export default ExpItemWithOther;
