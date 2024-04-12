import { create } from 'zustand';

const useUserState = create()(set => ({
  userInfo: null,
  setUserInfo: userInfo => set({ userInfo }),
}));

export default useUserState;
