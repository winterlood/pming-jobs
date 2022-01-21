import { Common } from "@types";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

import React from "react";
import style from "./ExperienceTimeline.module.scss";
import ExpItem from "components/common/ExpItem";

type Props = {
  experienceList: Common.Experience[];
};

const ExperienceTimeline = (props: Props) => {
  return (
    <div>
      <Timeline>
        {props.experienceList.map((it, idx) => (
          <Timeline.Item
            key={`expitem_${idx}`}
            dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
          >
            <ExpItem {...it} />
          </Timeline.Item>
        ))}
        <Timeline.Item>
          <div>
            <h2></h2>
          </div>
        </Timeline.Item>
      </Timeline>
      ,
    </div>
  );
};

export default ExperienceTimeline;
