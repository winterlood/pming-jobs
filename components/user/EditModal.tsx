import { CloseOutlined } from "@ant-design/icons";
import { EditProfile } from "@types";
import Modal from "antd/lib/modal/Modal";
import Heading from "components/common/Heading";
import React from "react";
import style from "./EditModal.module.scss";
import "trix/dist/trix";
import { useRecoilState } from "recoil";
import { editModalState } from "recoil/user-profile";

// ANTD

// COMPS

// STATICS

// TYPES

interface Props {
  modalState: EditProfile.ModalState;
  showModal: EditProfile.showModal;
  hideModal: () => void;
}

// COMPONENT

const EditModal = () => {
  const [modalState, setModalState] = useRecoilState(editModalState);

  const closeModal = () => {
    setModalState({
      visible: false,
    });
  };

  if (!modalState.visible) {
    return null;
  }
  const { title, body } = modalState.info;
  return (
    <Modal
      title={null}
      footer={null}
      closable={false}
      centered
      onCancel={closeModal}
      visible={modalState.visible}
    >
      <div className={style.container}>
        <div className={style.head}>
          <div className={style.modal_icon_wrapper}></div>
          <Heading type="h3">{title}</Heading>
          <div className={style.modal_icon_wrapper}>
            <CloseOutlined />
          </div>
        </div>
        <div className={style.body}>{body}</div>
        <div className={style.footer}></div>
      </div>
    </Modal>
  );
};

export default EditModal;
