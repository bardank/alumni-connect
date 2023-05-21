import { create } from "zustand";

const useStore = create((set) => ({
  user: {
    fullName: "",
    email: "",
    id: "",
  },
  setUser: (token, id, email, fullName) => {
    if (token) {
      localStorage.setItem("rent-app-token", token);
    }
    set((state) => ({
      ...state,
      user: {
        fullName: fullName,
        email: email,
        id: id,
      },
    }));
  },
  removeUser: () => {
    localStorage.removeItem("rent-app-token");
    set((state) => ({
      user: {
        fullName: "",
        email: "",
        id: "",
      },
    }));
  },
}));

export const useAuth = useStore;
