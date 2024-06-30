import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type User = {
  userId: string;
  walletAddress: string;
  createdAt: string;
  isNewUser: boolean;
};

type Store = {
  user: User | null;
  setUser: (user: User) => void;
};

export const useUserStore = create(
  persist<Store>(
    (set) => ({
      user: null,
      setUser: (user: User) => {
        set(() => ({ user }));
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    }
  )
);
