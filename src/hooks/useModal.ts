import { create } from "zustand";

interface SubmitOrderState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModal = create<SubmitOrderState>((set) => ({
  isOpen: false,
  onOpen: () =>
    set((state) => ({
      isOpen: true,
    })),
  onClose: () => set((state) => ({ isOpen: false })),
}));

export default useModal;
