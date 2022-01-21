import React, { ReactNode } from "react";
import { Common } from "@types";
import style from "./ExpItem.module.scss";
import Text from "./Text";
import ExpItemWithProject from "./ExpItemWithProject";
import ExpItemWithOther from "./ExpItemWithOther";

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

type Props = Common.Experience;
const ExpItem = (props: Props) => {
  const { type, feedTagList, created_date } = props;
  return (
    <div className={style.container}>
      {/* head */}
      <section className={style.head_div}>
        <div className={style.head_date}>
          <Text type={"text"} size={"sm"} color="gray">
            {created_date} 공유
          </Text>
        </div>
        <div className={style.head_tags}>
          {feedTagList.map((it, idx) => (
            <ExpTag key={it.id} {...it} />
          ))}
        </div>
      </section>

      {/* 여기부터 갈림 */}
      {type === "project" ? (
        <ExpItemWithProject {...props} />
      ) : (
        <ExpItemWithOther {...props} />
      )}
    </div>
  );
};

export default ExpItem;
