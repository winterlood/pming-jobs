import React, { useState } from "react";
import { UserProfile } from "@types";
import style from "./ExperienceEditor.module.scss";
import { Button, Input, Modal, Steps } from "antd";
import MyModal from "components/common/MyModal";
import TextArea from "antd/lib/input/TextArea";
const { Step } = Steps;

const ExperienceEditorBody = () => {
  const [state, setState] = useState({
    title: "",
    descript: "",
  });
  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className={style.container}>
        <div>
          <Input
            name={"title"}
            placeholder="프로젝트 이름"
            value={state.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextArea
            name={"descript"}
            placeholder="프로젝트 설명"
            value={state.descript}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button type="primary">CONNECT GITHUB</Button>
        </div>
      </div>
    </>
  );
};

type Props = {
  visible: boolean;
  toggleVisible: () => void;
};
type State = UserProfile.Experience;

const ExperienceEditor = (props: Props) => {
  const [state, setState] = useState<State>({
    title: "",
    descript: "",
  });

  return (
    <>
      <MyModal
        centered={true}
        closable={false}
        isVisible={props.visible}
        setIsVisible={props.toggleVisible}
        footer={<div></div>}
      >
        <Steps progressDot current={1}>
          <Step />
          <Step />
          <Step />
        </Steps>
        <ExperienceEditorBody />
      </MyModal>
    </>
  );
};

export default ExperienceEditor;
