import Heading from "components/common/Heading";
import withEditable from "hoc/withEditable";
import React from "react";
import { useRecoilValue } from "recoil";
import { editModeState, introduceState } from "recoil/user-profile";
import style from "./UserIntroduce.module.scss";
import EditButton from "./EditButton";
import IntroduceEditor from "./modal/IntroduceEditor";
import Text from "components/common/Text";

// TYPES

type Props = {
  data: string;
};

// COMPONENT

const UserIntroduce = ({ data }: Props) => {
  const isEdit = useRecoilValue(editModeState);
  const introduce = useRecoilValue(introduceState);

  return (
    <div className={style.container}>
      <div className={style.head_wrapper}>
        <Heading type="h4" color="primary">
          INTRODUCE
        </Heading>
      </div>
      <div className={style.body_wrapper}>
        <Text type={"text"}>
          <div dangerouslySetInnerHTML={{ __html: introduce }}></div>
        </Text>
        {isEdit && (
          <EditButton
            modalInfo={{
              title: "소개 수정하기",
              body: <IntroduceEditor />,
            }}
            text={"수정"}
          />
        )}
      </div>
    </div>
  );
};

export default withEditable(React.memo(UserIntroduce));
