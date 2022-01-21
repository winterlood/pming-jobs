import { atom } from "recoil";

export const screenLoadingState = atom({
  key: "screenLoadingState",
  default: false,
});

export const buttonLoadingState = atom({
  key: "buttonLoadingState",
  default: false,
});
