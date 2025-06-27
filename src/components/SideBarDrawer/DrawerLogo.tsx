import React from "react";
import { useRouter } from "next/navigation";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

type DrawerLogoProps = { isOpen: boolean };

const styles = {
  container: "flex items-center cursor-pointer p-4 text-lg",
  labelBase:
    "transition-all duration-300 text-xl overflow-hidden whitespace-nowrap",
  labelOpen: "opacity-100 w-auto",
  labelClosed: "opacity-0 w-0",
};

export const DrawerLogo = ({ isOpen }: DrawerLogoProps) => {
  const router = useRouter();

  return (
    <div className={styles.container} onClick={() => router.push("/")}>
      <AccountBoxIcon color="primary" fontSize="large" />
      <span
        className={`${styles.labelBase} ${
          isOpen ? styles.labelOpen : styles.labelClosed
        }`}
      >
        <strong>CWS</strong>Manager
      </span>
    </div>
  );
};
