import React from "react";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export type drawerListType = {
  icon: React.ElementType;
  title: string;
  path: string;
  notification?: number; // Optional property for notifications
};

export const drawerList: drawerListType[] = [
  {
    icon: ShowChartIcon,
    title: "Analyse",
    path: "/analyse",
    notification: 0,
  },
  {
    icon: PeopleAltOutlinedIcon,
    title: "Mitarbeiter",
    path: "/mitarbeiter",
    notification: 3,
  },
  {
    icon: CalendarTodayIcon,
    title: "Kalender",
    path: "/kalender",
    notification: 0,
  },
  {
    icon: Inventory2OutlinedIcon,
    title: "Archive",
    path: "/archive",
    notification: 0,
  },
  {
    icon: ChatBubbleOutlineOutlinedIcon,
    title: "Chat",
    path: "/chat",
    notification: 2,
  },

  {
    icon: SettingsOutlinedIcon,
    title: "Einstellungen",
    path: "/einstellungen",
    notification: 0,
  },
];
