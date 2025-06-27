import React from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const styles = {
  container:
    "flex items-center cursor-pointer px-2 py-1 rounded-full bg-white hover:bg-gray-200 transition",
  icon: "text-gray-600",
};

const ProfileCircle = () => {
  return (
    <button className={styles.container}>
      <PersonOutlinedIcon className={styles.icon} fontSize="small" />
    </button>
  );
};

export default ProfileCircle;
