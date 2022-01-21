import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { introduceState } from "recoil/user-profile";
import style from "./IntroduceEditor.module.scss";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT
const TextEditor = dynamic(() => import("components/common/TextEditor"), {
  ssr: false,
});

const IntroduceEditor = (props: Props) => {
  const [introduce, setIntroduce] = useRecoilState(introduceState);
  const [localValue, setLocalValue] = useState(introduce);

  const onSubmit = () => {
    setIntroduce(localValue);
  };

  return (
    <div className={style.container}>
      <TextEditor value={localValue} setValue={setLocalValue} />
      <button onClick={onSubmit}>save</button>
    </div>
  );
};

export default IntroduceEditor;
