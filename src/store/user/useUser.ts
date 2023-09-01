import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserProperties = {
  userId: string | null;
  token: string | null;
  setUserId: (userId: string) => void;
  setToken: (token: string | null) => void;
};

export const useUser = create(
  persist<UserProperties>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, _get) => ({
      userId: null,
      token: null,
      setUserId: (id) => set({ userId: id }),
      setToken: (token) => set({ token }),
    }),
    {
      name: 'user-storage',
    },
  ),
);
