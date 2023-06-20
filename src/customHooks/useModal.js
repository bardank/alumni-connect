import { create, StoreApi, UseBoundStore } from "zustand";

export const useModal = create((set) => ({
  modalJsx: [],
  showModal: false,
  openModal: (jsx) =>
    set({
      showModal: true,
      modalJsx: useModal.getState().modalJsx.concat(jsx),
    }),
  closeModal: () => {
    set({
      showModal: useModal.getState().modalJsx.length > 1,
      modalJsx: useModal.getState().modalJsx.slice(0, -1),
    });
  },
}));
