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
    console.log({ token, id, email, fullName });
    if (token) {
      localStorage.setItem("alumni-connect", token);
    }
    console.log(localStorage.getItem("alumni-connect"));
    set((state) => ({
      isAuthenticated: true,
      isLoading: false,
      user: {
        fullName: fullName,
        email: email,
        id: id,
      },
    }));
  },
  removeUser: () => {
    localStorage.removeItem("alumni-connect");
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
      isLoading: false,
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
export default useStore;
