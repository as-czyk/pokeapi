import { User } from "firebase/auth";
import { create } from "zustand";

type UserStoreState = {
  userId: string;
  email: string;
};

type UserStoreActions = {
  setUserId: (arg: string) => void;
  setEmail: (arg: string) => void;
  setUser: (arg: User) => void;
};

type UserStore = UserStoreState & UserStoreActions;

export const useUserStore = create<UserStore>((set) => ({
  userId: "",
  email: "",
  setUser: (user: User) => {
    if (!user) return;

    set(() => ({
      userId: user.uid,
      email: user.email ? user.email : "",
    }));
  },
  setUserId: (id: string) =>
    set((state) => ({
      ...state,
      userId: id,
    })),
  setEmail: (email: string) =>
    set((state) => ({
      ...state,
      email,
    })),
}));
