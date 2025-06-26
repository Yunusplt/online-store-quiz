"use client";
import React, { useState } from "react";
import NewHeader from "@/components/NewHeader";
import SideBarDrawer from "@/components/SideBarDrawer";
import { useRouter } from "next/navigation";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    // Clear token and redirect to login
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="flex h-screen max-w-screen">
      <SideBarDrawer isOpen={isOpen} toggleDrawer={() => setIsOpen(!isOpen)} />
      <div
        className={`flex flex-col transition-all duration-300 ${
          isOpen ? "w-[calc(100%-16rem)] ml-64" : "w-[calc(100%-4rem)] ml-16"
        }`}
      >
        <NewHeader onLogout={handleLogout} />
        <main className="bg-[#f5f5f5] p-4 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Navbar;
