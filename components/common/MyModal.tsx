import Modal from "antd/lib/modal/Modal";
import React, { ReactNode } from "react";
import style from "./MyModal.module.scss";

type Props = {
  centered: boolean;
  closable: boolean;
  closeIcon?: ReactNode;
  isVisible: boolean;
  setIsVisible: () => void;
  children: ReactNode;
  footer?: ReactNode;
};

const MyModal = (props: Props) => {
  return (
    <Modal
      onOk={props.setIsVisible}
      onCancel={props.setIsVisible}
      visible={props.isVisible}
      centered={props.centered}
      footer={props.footer}
    >
      <div>{props.children}</div>
    </Modal>
  );
};

export default MyModal;
