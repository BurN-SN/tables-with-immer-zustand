import { useState } from "react";
// import styles from "./Nav.module.css";
import styles from "./Nav.module.scss";
import cn from "classnames";
import { AddModal } from "../Modal/AddModal";

const { tab, addTabBtn } = styles;

export const AddButton = () => {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleClick} className={cn(tab, addTabBtn)}>
        +
      </button>
      <AddModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
