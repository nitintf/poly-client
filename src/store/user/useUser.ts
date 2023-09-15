import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserProperties = {
  userId: string | null;
  token: string | null;
  setUserId: (userId: string | null) => void;
  setToken: (token: string | null) => void;
};

// const BLACKLIST_VALUES = new Set([]);

export const useUser = create<UserProperties>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, _get) => ({
      userId: null,
      token: null,
      setUserId: (id) => set({ userId: id }),
      setToken: (token) => set({ token }),
    }),
    {
      name: 'user-storage',
      // partialize: (state) =>
      //   Object.fromEntries(Object.entries(state).filter(([key]) => !BLACKLIST_VALUES.has(key))),
    },
  ),
);
