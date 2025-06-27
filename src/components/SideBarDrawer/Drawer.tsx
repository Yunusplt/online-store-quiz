"use client";
import { DrawerLogo } from "./DrawerLogo";
import SideBarMenuItems from "./DrawerMenuItems";
import DrawerToogleButton from "./DrawerToogleButton";

type DrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const drawerStyles = {
  base: "bg-[#f6f6f6] h-full fixed top-0 left-0 transition-all duration-300 overflow-hidden",
  open: "w-64",
  closed: "w-18",
};

export default function Drawer({ isOpen, toggleDrawer }: DrawerProps) {
  return (
    <div
      className={`${drawerStyles.base} ${
        isOpen ? drawerStyles.open : drawerStyles.closed
      }`}
    >
      <DrawerLogo isOpen={isOpen} />
      <SideBarMenuItems isOpen={isOpen} />
      <DrawerToogleButton isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
}
