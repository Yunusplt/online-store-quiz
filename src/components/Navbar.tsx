"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Drawer from "@/components/SideBarDrawer/Drawer";

const styles = {
  container: "flex h-screen max-w-screen",
  header: "flex flex-col transition-all duration-300",
  openDrawer: "w-[calc(100%-16rem)] ml-64",
  closedDrawer: "w-[calc(100%-4rem)] ml-16",
  main: "bg-[#f5f5f5] p-4 flex-1 overflow-auto",
};

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    // Clear token and redirect to login
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <Drawer isOpen={isOpen} toggleDrawer={() => setIsOpen(!isOpen)} />
      <div
        className={`${styles.header} ${
          isOpen ? styles.openDrawer : styles.closedDrawer
        }`}
      >
        <Header onLogout={handleLogout} />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Navbar;
