import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { drawerList } from "@/utils/drawerList";

type DrawerMenuItemsProps = {
  isOpen: boolean;
};

const styles = {
  listContainer: "space-y-4 p-4 text-sm",

  addButton:
    "flex items-center rounded-2xl gap-1 py-2 px-2 w-full text-white bg-gradient-to-r from-[#4fcdf5] to-[#688bd6] hover:bg-gray-700 transition",
  itemButtonBase:
    "flex items-center rounded-2xl gap-2 py-2 px-2 w-full text-left hover:bg-gray-200 transition cursor-pointer",
  itemButtonActive: "shadow text-blue-500",

  labelBase: "transition-all duration-300 overflow-hidden whitespace-nowrap",
  labelOpen: "opacity-100 w-auto",
  labelClosed: "opacity-0 w-0",

  notificationBadge:
    "ml-auto bg-blue-400 text-white rounded-full px-2 py-1 text-xs",
};

const DrawerMenuItems = ({ isOpen }: DrawerMenuItemsProps) => {
  return (
    <ul className={styles.listContainer}>
      <li>
        <button className={styles.addButton}>
          <AddIcon />
          <span
            className={`${styles.labelBase} ${
              isOpen ? styles.labelOpen : styles.labelClosed
            } `}
          >
            Mitarbeiter Hinzufügen
          </span>
        </button>
      </li>
      {drawerList.map((item, index) => {
        const pathname = "/mitarbeiter";
        const isActive = pathname === item.path;
        return (
          <li key={`list-${index}`}>
            <button
              className={`${styles.itemButtonBase} ${
                isActive ? styles.itemButtonActive : ""
              }`}
            >
              <item.icon />
              <span
                className={`${styles.labelBase} ${
                  isOpen ? styles.labelOpen : styles.labelClosed
                }`}
              >
                {item.title}
              </span>

              {item.notification !== undefined &&
                item.notification > 0 &&
                isOpen && (
                  <span className={styles.notificationBadge}>
                    {item.notification}
                  </span>
                )}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default DrawerMenuItems;
