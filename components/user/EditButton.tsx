import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import React, { ReactNode, useMemo } from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { editModeState, editModalState } from "recoil/user-profile";
import style from "./EditButton.module.scss";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {
  text: string;
  modalInfo: {
    title: string;
    body: ReactNode;
    icon?: "edit" | "new";
  };
};

// COMPONENT

const EditButton = (props: Props) => {
  const isEditMode = useRecoilValue(editModeState);
  const icon_default = props.modalInfo.icon || "edit";

  const iconReducer = useMemo(() => {
    switch (icon_default) {
      case "edit":
        return <EditOutlined />;
      case "new":
        return <PlusOutlined />;
      default:
        return null;
    }
  }, [icon_default]);

  const handleOnClick = useRecoilCallback(({ set }) => () => {
    set(editModalState, {
      visible: true,
      info: props.modalInfo,
    });
  });

  return (
    <>
      {isEditMode && (
        <div className={style.container}>
          <button onClick={handleOnClick}>
            {props.text}&nbsp;
            {iconReducer}
          </button>
        </div>
      )}
    </>
  );
};

export default EditButton;
