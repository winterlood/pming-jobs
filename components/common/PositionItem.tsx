import React, { useState } from "react";
import style from "./PositionItem.module.scss";
import { Profile } from "@types";
import Text from "./Text";
import { Collapse } from "antd";
import { useRecoilValue } from "recoil";
import { positionItem } from "recoil/user-profile";

type Props = {
  id: string;
};

const { Panel } = Collapse;
const PositionItem = ({ id }: Props) => {
  const data = useRecoilValue(positionItem(id));
  const { title, orgName, orgIconUrl, period, summary, content } = data;
  const [isHide, setIsHide] = useState(true);

  const onChangeCollapse = () => {
    setIsHide(!isHide);
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <Text type={"text"} size={"base"} weight={"bold"}>
          {title}
        </Text>
      </div>
      <div className={style.main}>
        <img
          alt={`${orgName}_icon`}
          className={style.org_icon}
          src={orgIconUrl}
        />
        <div>
          <Text type={"text"}>{orgName}</Text>
          <br />
          <Text
            type={"text"}
            color={"gray"}
          >{`${period.start} ~ ${period.end}`}</Text>
        </div>
      </div>
      {content && (
        <div className={style.content}>
          {/* <Text type={"text"}>{summary}</Text> */}
          <Collapse onChange={onChangeCollapse} ghost>
            <Panel
              showArrow={false}
              className={style.panel}
              header={
                <Text size={"sm"} color="gray" type={"text"}>
                  {isHide ? "더보기" : "줄이기"}
                </Text>
              }
              key="1"
            >
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
              {/* <Text weight={"medium"} type={"text"}>
              경력 사항
            </Text> */}
              {/* <Text type={"text"}>{content}</Text> */}
            </Panel>
          </Collapse>
        </div>
      )}
    </div>
  );
};

export default PositionItem;
