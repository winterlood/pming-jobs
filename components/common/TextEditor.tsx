import React, { useState } from "react";
import style from "./TextEditor.module.scss";
import { ReactTrixRTEInput, ReactTrixRTEToolbar } from "react-trix-rte";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {
  value: string;
  setValue: (value: string) => void;
};

// COMPONENT

const TextEditor = ({ value, setValue }: Props) => {
  function handleChange(event, newValue) {
    setValue(newValue); // OR custom on change listener.
  }
  return (
    <div className={style.container}>
      <ReactTrixRTEToolbar
        toolbarActions={["bold", "italic"]}
        toolbarId="react-trix-rte-editor"
      />
      <ReactTrixRTEInput
        toolbarId="react-trix-rte-editor"
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextEditor;
