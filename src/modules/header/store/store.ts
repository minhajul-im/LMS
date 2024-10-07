import { create } from "zustand";

type Menu = {
  isOpen: boolean;
};

type MenuAction = {
  onOpen: () => void;
  onClose: () => void;
};

export const useMobileNavbar = create<MenuAction & Menu>((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));
