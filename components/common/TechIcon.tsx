import React from "react";
import style from "./TechIcon.module.scss";
import Text from "components/common/Text";

type Props = {
  iconUrl?: string;
  techName?: string;
  className?: string;
};

const TechIcon = (props: Props) => {
  if (props.iconUrl) {
    return (
      <a>
        <div>
          <img
            src={props.iconUrl}
            className={[style.imgIcon, props.className].join(" ")}
          />
        </div>
      </a>
    );
  }

  if (props.techName) {
    return (
      <a>
        <div className={[style.divIcon, props.className].join(" ")}>
          <Text type={"text"} weight={"bold"}>
            {props.techName[0]}
          </Text>
        </div>
      </a>
    );
  }

  return null;
};

export default TechIcon;
