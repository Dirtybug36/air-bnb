import { useState } from "react";

interface DropdownState {
  showModal: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}
export const useToggle = (): DropdownState => {
  const [showModal, setToggle] = useState(false);

  const toggle = () => {
    setToggle((prevState) => !prevState);
  };
  const close = () => {
    setToggle(false);
  };
  const open = () => {
    setToggle(true);
  };

  return { showModal, toggle, close, open };
};
