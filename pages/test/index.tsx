import React, { Suspense, useEffect } from "react";
import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import {
  testItemFamily,
  testItemIdList,
  userAgeState,
  userNameState,
  userSelector,
  userTallState,
} from "recoil/test";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT

const fetchApi = () => {
  return new Promise<{ id: number; text: string }[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" },
        { id: 4, text: "4" },
      ]);
    }, 1000);
  });
};

const ListItemComp = ({ id }) => {
  const [item, setItem] = useRecoilState(testItemFamily(id));
  const onChange = (e) => {
    setItem({
      ...item,
      text: e.target.value,
    });
  };
  return (
    <div>
      item {id}
      <input value={item.text} onChange={onChange} />
    </div>
  );
};

const ListComp = () => {
  const [list, setList] = useRecoilState(testItemIdList);

  const setItem = useRecoilCallback(({ set }) => async () => {
    const res = await fetchApi();
    set(
      testItemIdList,
      res.map((it) => it.id)
    );
    res.forEach((it) => {
      set(testItemFamily(it.id), { id: it.id, text: it.text });
    });
  });

  useEffect(() => {
    setItem();
  }, []);

  if (!list) {
    return <div>loading</div>;
  } else {
    console.log("list is ready");
    return (
      <div>
        {list.map((it, idx) => (
          <div key={idx}>
            <ListItemComp {...it} id={it} />
          </div>
        ))}
      </div>
    );
  }
};

const EditNameComp = () => {
  useEffect(() => {
    console.log("render name ");
  });
  const [name, setName] = useRecoilState(userNameState);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

const EditAgeComp = () => {
  useEffect(() => {
    console.log("render age ");
  });
  const [age, setAge] = useRecoilState(userAgeState);
  return (
    <div>
      <input value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
    </div>
  );
};

const EditTallComp = () => {
  useEffect(() => {
    console.log("render tall ");
  });
  const [tall, setTall] = useRecoilState(userTallState);
  return (
    <div>
      <input value={tall} onChange={(e) => setTall(parseInt(e.target.value))} />
    </div>
  );
};

const useUserAction = () => {
  const action = useRecoilCallback(({ snapshot }) => () => {
    const name = snapshot.getLoadable(userNameState).contents;
    const age = snapshot.getLoadable(userAgeState).contents;
    const tall = snapshot.getLoadable(userTallState).contents;
    console.log({
      name,
      age,
      tall,
    });
  });
  return action;
};

const Index = (props: Props) => {
  const action = useRecoilCallback(({ snapshot }) => () => {
    const name = snapshot.getLoadable(userNameState).contents;
    const age = snapshot.getLoadable(userAgeState).contents;
    const tall = snapshot.getLoadable(userTallState).contents;
    console.log({
      name,
      age,
      tall,
    });
  });
  return (
    <div>
      <button onClick={action}>action</button>
      <div style={{ marginBottom: "30px" }}>
        <EditNameComp />
        <EditAgeComp />
        <EditTallComp />
      </div>
    </div>
  );
};

export default Index;
