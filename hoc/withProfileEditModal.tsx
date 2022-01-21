import { EditProfile } from "@types";
import EditModal from "components/user/EditModal";
import { ComponentType, ReactNode, useState } from "react";

const withProfileEditModal = <P extends Object>(
  WrappedComponent: ComponentType<P>
) => {
  // eslint-disable-next-line react/display-name
  return ({ ...props }) => {
    const [modalState, setModalState] = useState<EditProfile.ModalState>({
      visible: false,
    });

    const showModal: EditProfile.showModal = (title, body) => {
      setModalState({
        visible: true,
        info: {
          title: title,
          body: body,
        },
      });
    };

    const hideModal = () => {
      setModalState({
        visible: false,
      });
    };

    return (
      <>
        <WrappedComponent showModal={showModal} {...(props as P)} />
        <EditModal
          modalState={modalState}
          showModal={showModal}
          hideModal={hideModal}
        />
      </>
    );
  };
};

export default withProfileEditModal;
