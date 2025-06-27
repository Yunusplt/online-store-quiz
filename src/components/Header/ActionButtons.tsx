import React from "react";

const styles = {
  container: "bg-white rounded-3xl p-1.5 flex items-center gap-1 text-xs ml-4",
  button:
    "py-1 text-blue-500 border rounded-lg w-25 hover:bg-gray-200 transition cursor-pointer",
  activeButton:
    "py-1 rounded-lg w-25 text-xs font-bold hover:bg-gray-200 transition cursor-pointer",
};

const ActionButtons = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>button</button>
      <button className={styles.button}>button</button>
      <button className={styles.button}> button</button>
      <button className={styles.activeButton}>Loger</button>
      <button className={styles.button}> Production</button>
    </div>
  );
};

export default ActionButtons;
