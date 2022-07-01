import { atom } from "recoil";

export const userState = atom({ key: "userState", default: undefined });
export const addSheetOpenState = atom({ key: "addSheetOpenState", default: false });
