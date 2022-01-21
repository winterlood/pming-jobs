import { Profile } from "@types";
import { Input } from "antd";
import React from "react";
import style from "./PositionEditor.module.scss";

// ANTD

// COMPS

// STATICS

// TYPES

type Props =
  | {
      isEdit: true;
      originData: Profile.Position;
    }
  | { isEdit: false };

// COMPONENT

const PositionEditor = (props: Props) => {
  return (
    <div>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};

export default PositionEditor;
