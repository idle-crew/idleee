import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const uploadStepAtomState = atom({
    key: 'uploadStep',
    default: '상품정보',
})

export const useUploadStepStore = () => useRecoilState(uploadStepAtomState);
export const useSetUploadStepStore = () =>  useSetRecoilState(uploadStepAtomState);
export const useUploadStepValueStore = () => useRecoilValue(uploadStepAtomState);