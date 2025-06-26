"use client";
import { drawerList } from "@/utils/drawerList";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export default function SideBarDrawer({
  isOpen,
  toggleDrawer,
}: {
  isOpen: boolean;
  toggleDrawer: () => void;
}) {
  return (
    <div
      className={`bg-[#f6f6f6] h-full fixed top-0 left-0 transition-all duration-300 overflow-hidden ${
        isOpen ? "w-64" : "w-18"
      }`}
    >
      <div className="p-4 text-lg">
        <span className="flex items-center ">
          <AccountBoxIcon color="primary" fontSize="large" />
          <span
            className={`transition-all duration-300 text-xl overflow-hidden whitespace-nowrap ${
              isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
            }`}
          >
            <strong>CWS</strong>Manager
          </span>
        </span>
      </div>
      <ul className="space-y-4 p-4 text-sm">
        <li>
          <button className="flex rounded-2xl gap-1 py-2 px-2 radius w-full  text-white bg-gradient-to-r from-[#4fcdf5] to-[#688bd6]  hover:bg-gray-700  rounded transition">
            <AddIcon className="text-white" />
            <span
              className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${
                isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
              }`}
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
                className={`flex rounded-2xl gap-2 py-2 px-2 radius w-full text-left hover:bg-gray-200  rounded transition cursor-pointer ${
                  isActive ? "shadow text-blue-500" : ""
                } 
                  `}
              >
                <item.icon />
                <span
                  className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${
                    isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
                  }`}
                >
                  {item.title}
                </span>

                {item.notification !== undefined &&
                  item.notification > 0 &&
                  isOpen && (
                    <span className="ml-auto bg-blue-400 text-white rounded-full px-2 py-1 text-xs">
                      {item.notification}
                    </span>
                  )}
              </button>
            </li>
          );
        })}

        <li className="absolute bottom-4 left-6">
          <button
            className="flex  gap-1 rounded-full cursor-pointer  "
            onClick={() => {
              toggleDrawer();
            }}
          >
            {isOpen ? (
              <ArrowBackIosNewOutlinedIcon fontSize="small" />
            ) : (
              <ArrowForwardIosOutlinedIcon fontSize="small" />
            )}
            <span
              className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${
                isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
              }`}
            >
              {isOpen ? "Liste klappen" : ""}
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}
