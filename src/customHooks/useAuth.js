import { create } from "zustand";

const useStore = create((set) => ({
  isAuthenticated: false,
  isLoading: true,
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
      isAuthenticated: true,
      isLoading : false,
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
  setAuthincatedUser: () => {
    set((state) => ({
      isAuthenticated: false,
      isLoading : false,
      user: {
        name: "",
        phone: "",
        id: "",
        verifiedPhone: false,
      },
    }));
  }
}));

export const useAuth = useStore;
export default useStore;
