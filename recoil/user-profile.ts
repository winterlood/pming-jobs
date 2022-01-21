import { Common, EditProfile, Profile } from "@types";
import { atom, atomFamily, selector } from "recoil";

export const editModalState = atom<EditProfile.ModalState>({
  key: "editModalState",
  default: {
    visible: false,
  },
});

export const editModeState = atom<boolean>({
  key: "editModeState",
  default: true,
});

// 배너
export const privateBannerState = atom<string>({
  key: "privateBannerState",
  default: "",
});

// 사용자
export const userState = atom<Profile.User>({
  key: "userState",
  default: {
    name: "",
    nickName: "",
    email: "",
    avatar_url: "",
    introduce: "",
  },
});

// 뱃지
export const badgeIdList = atom<string[]>({
  key: "badgeIdList",
  default: [],
});

export const badgeItem = atomFamily<Common.ProfileBadge, string>({
  key: "badgeItem",
  default: (id) => ({
    id: id,
    name: "",
  }),
});

// 소개
export const introduceState = atom<Profile.User["introduce"]>({
  key: "introduceState",
  default: "",
});

// 채널
export const channelIdList = atom<string[]>({
  key: "channelIdList",
  default: [],
});

export const channelItem = atomFamily<Common.OpenGraphItem, string>({
  key: "channelItem",
  default: (id) => ({
    id: id,
    title: "",
    thumbnailUrl: "",
    url: "",
    origin: "",
  }),
});

// 포지션

export const positionIdList = atom<string[]>({
  key: "positionIdList",
  default: [],
});

export const positionItem = atomFamily<Profile.Position, string>({
  key: "positionItem",
  default: (id) => ({
    id: id,
    title: "",
    orgName: "",
    orgIconUrl: "",
    period: {
      start: "",
      end: "",
    },
    summary: "",
    content: "",
  }),
});

// 기술
export const techState = atom({
  key: "techState",
  default: "",
});
