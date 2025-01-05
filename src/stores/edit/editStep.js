import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const editStepAtomState = atom({
  key: "editStep",
  default: "상품정보",
});

export const useEditStepStore = () => useRecoilState(editStepAtomState);
export const useSetEditStepStore = () =>
  useSetRecoilState(editStepAtomState);
export const useEditStepValueStore = () =>
  useRecoilValue(editStepAtomState);
