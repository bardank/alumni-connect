import create, { createStore } from "zustand";

const useStore = createStore((set) => ({
  user: {
    name: "",
    phone: "",
    id: "",
    verifiedPhone: false,
  },
  setUser: (token, id, phone, fullName, verifiedPhone) => {
    if (token) {
      localStorage.setItem("rent-app-token", token);
    }
    set((state) => ({
      user: {
        name: fullName,
        phone: phone,
        id: id,
        verifiedPhone: verifiedPhone,
      },
    }));
  },
  removeUser: () => {
    localStorage.removeItem("rent-app-token");
    set((state) => ({
      user: {
        name: "",
        phone: "",
        id: "",
        verifiedPhone: false,
      },
    }));
  },
}));

export const useAuth = useStore;
