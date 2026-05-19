import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  sessionToken: string | null;
  setUser: (user: User) => void;
  setSession: (token: string, user: User) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  phone?: string;
  avatar?: string;
  bio?: string;
  interests?: string[];
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isLoading: true,
  user: null,
  sessionToken: null,
  setUser: (user) => set({ user }),
  setSession: (token, user) =>
    set({ sessionToken: token, user, isAuthenticated: true, isLoading: false }),
  logout: () =>
    set({
      sessionToken: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
    }),
  setLoading: (loading) => set({ isLoading: loading }),
}));
