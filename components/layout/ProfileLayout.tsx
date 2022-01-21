import React, { ReactNode } from "react";
import style from "./ProfileLayout.module.scss";

type Props = {
  children: ReactNode;
};

const ProfileLayout = (props: Props) => {
  return (
    <>
      <main className={style.main}>{props.children}</main>
    </>
  );
};

export default ProfileLayout;
