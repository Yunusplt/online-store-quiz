import React from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

type DrawerToogleButtonProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const styles = {
  container: "absolute bottom-4 left-6",
  button: "flex items-center gap-1 rounded-full cursor-pointer",
  labelBase: "transition-all duration-300 overflow-hidden whitespace-nowrap",
  labelOpen: "opacity-100 w-auto",
  labelClosed: "opacity-0 w-0",
};

const DrawerToogleButton = ({
  isOpen,
  toggleDrawer,
}: DrawerToogleButtonProps) => {
  const buttonIcon = isOpen ? (
    <ArrowBackIosNewOutlinedIcon fontSize="small" />
  ) : (
    <ArrowForwardIosOutlinedIcon fontSize="small" />
  );
  const buttonLabel = isOpen === true ? "Liste klappen" : "";

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => {
          toggleDrawer();
        }}
      >
        {buttonIcon}
        <span
          className={`${styles.labelBase} ${
            isOpen ? styles.labelOpen : styles.labelClosed
          }`}
        >
          {buttonLabel}
        </span>
      </button>
    </div>
  );
};

export default DrawerToogleButton;
