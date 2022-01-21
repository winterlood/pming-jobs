import React, { ReactNode } from "react";
import style from "./Text.module.scss";

const TextSize = {
  lg: "18px",
  base: "16px",
  sm: "14px",
  tiny: "12px",

  h2: "25px",
  h4: "16px",
};

const Color = {
  primary: "#2a65ff",
  default: "black",
  gray: "gray",
  white: "white",
};

type baseProps = {
  children: ReactNode;
  color?: "primary" | "default" | "gray" | "white" | string;
};

type textProps = {
  type: "text";
  size?: "lg" | "base" | "sm" | "tiny";
  weight?: "bold" | "medium" | "regular" | "thin";
};
type paragraphProps = {
  type: "text";
  size?: "lg" | "base" | "sm" | "tiny";
  weight?: "bold" | "medium" | "regular" | "thin";
};
type buttonProps = {
  type: "btn";
};
type tagProps = {
  type: "tag";
};
type Props =
  | (baseProps & textProps)
  | (baseProps & buttonProps)
  | (baseProps & tagProps)
  | (baseProps & paragraphProps);
const Text = (props: Props) => {
  const color = props.color
    ? props.color in Color
      ? Color[props.color]
      : props.color
    : "default";

  switch (props.type) {
    case "text": {
      const size = props.size || "base";
      const weight = props.weight || "regular";
      return (
        <span
          className={style.text}
          style={{
            color: color,
            fontFamily: `"${weight}"`,
            fontSize: TextSize[props.size],
          }}
        >
          {props.children}
        </span>
      );
    }
    case "btn": {
      return (
        <span
          className={style.btn}
          style={{
            color: color,
          }}
        >
          {props.children}
        </span>
      );
    }
    case "tag": {
      return (
        <span
          className={style.btn}
          style={{
            color: color,
            fontFamily: "medium",
          }}
        >
          {props.children}
        </span>
      );
    }
  }
};

export default Text;

// 25  : h2
// 18  : lg
// 16  : base
// 14  : sm
// 12  : tiny
