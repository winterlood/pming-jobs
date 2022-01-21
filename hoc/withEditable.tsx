import { EditProfile } from "@types";
import { ComponentType } from "react";

const withEditable = (
  WrappedComponent: ComponentType<EditProfile.EditableCompProps>
) => {
  // eslint-disable-next-line react/display-name
  return ({ ...props }: EditProfile.EditableCompProps) => {
    return <WrappedComponent {...props} />;
  };
};

export default withEditable;
