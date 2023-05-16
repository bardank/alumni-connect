import create, { createStore } from "zustand";
// import { devtools, persist } from "zustand/middleware";

export const useStore = createStore((set) => ({
  notifications: [],
  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((item) => item.id != id),
    }));
  },
  setNotification: (id, message, status, timeDelay = 3000) => {
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          id,
          message,
          status,
        },
      ],
    }));
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter((item) => item.id != id),
      }));
    }, timeDelay);
  },
}));

export const useNotification = useStore;

export default useStore;
