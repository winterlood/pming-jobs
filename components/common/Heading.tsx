import React, { ReactNode } from "react";
import style from "./Heading.module.scss";
import Text from "components/common/Text";

const TextSize = {
  h1: "30px",
  h2: "25px",
  h3: "20px",
  h4: "16px",
};

const Color = {
  primary: "#2a65ff",
  default: "black",
  gray: "gray",
  white: "white",
};
type Props = {
  type: "h1" | "h2" | "h3" | "h4";
  color?: "primary" | "default" | "gray" | "white";
  children: ReactNode;
  label?: ReactNode;
};
const Heading = (props: Props) => {
  const color = Color[props.color || "default"];
  const Res = (
    <>
      {props.children}
      {props.label && (
        <>
          <Text type={"text"} size={"sm"} color="gray">
            {props.label}
          </Text>
        </>
      )}
    </>
  );
  const buildStyle = (type: Props["type"]) => {
    return {
      color: color,
      fontFamily: "bold",
      fontSize: TextSize[type],
    };
  };
  const Style = buildStyle(props.type);
  const HRes = () => {
    switch (props.type) {
      case "h1": {
        return <h1 style={Style}>{Res}</h1>;
      }

      case "h2": {
        return <h2 style={Style}>{Res}</h2>;
      }

      case "h3": {
        return <h3 style={Style}>{Res}</h3>;
      }

      case "h4": {
        return <h4 style={Style}>{Res}</h4>;
      }
    }
  };
  return <div className={style.container}>{HRes()}</div>;
};

export default Heading;
