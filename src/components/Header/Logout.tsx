import React from "react";
import { HeaderProps } from "./Header";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const styles = {
  container:
    "flex items-center px-2 py-1 cursor-pointer rounded-full bg-white hover:bg-gray-200 transition",
  icon: "text-gray-600",
};

const Logout = ({ onLogout }: HeaderProps) => {
  return (
    <button onClick={onLogout} className={styles.container}>
      <ExitToAppOutlinedIcon className={styles.icon} fontSize="small" />
    </button>
  );
};

export default Logout;
