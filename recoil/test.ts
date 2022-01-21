import { atom, atomFamily, selector } from "recoil";

export const testItemIdList = atom({
  key: "testItemIdList",
  default: [],
});

export const testItemFamily = atomFamily({
  key: "testItemFamily",
  default: (id) => ({ id: id, text: "" }),
});

export const complexState = atom({
  key: "complexState",
  default: {
    id: 1,
    name: "이정환",
    age: 25,
    tall: 175,
  },
});

export const userNameState = atom({
  key: "userNameState",
  default: "이정환",
});
export const userAgeState = atom({
  key: "userAgeState",
  default: 25,
});
export const userTallState = atom({
  key: "userTallState",
  default: 175,
});
export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    const name = get(userNameState);
    const age = get(userAgeState);
    const tall = get(userTallState);
    return {
      name,
      age,
      tall,
    };
  },
});
