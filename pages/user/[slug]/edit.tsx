import { UserProfile } from "@types";
import { Button } from "antd";
import MyModal from "components/common/MyModal";
import { useState } from "react";
import style from "./edit.module.scss";

type State = {
  experience: UserProfile.Experience[];
};

const EditUser = (props) => {
  const [state, setState] = useState<State>({
    experience: [],
  });

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  const { user } = props;
  return (
    <div>
      <h2>프로필 수정</h2>
      <h3>
        {user}
        {"'s Profile"}
      </h3>
      {/* EXPERIENCE */}
      <div>
        <h4>Experience</h4>

        <Button onClick={toggleVisible} type="primary">
          + ADD EXPERIENCE
        </Button>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  return { props: { user: slug, content: "..." } };
}

export default EditUser;
