import { atom } from "recoil";

export const userState = atom({ key: "userState", default: {} });
export const addSheetOpenState = atom({ key: "addSheetOpenState", default: false });
