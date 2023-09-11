import {
  IconBuilding,
  IconDashboard,
  IconMessage,
  IconPerson,
  IconProfile,
  IconStar,
} from "@/components/icons";
import { TDropdownData, TSidebarLink } from "@/types/general.type";

export const sidebarLink: TSidebarLink[] = [
  {
    title: "Dashboard",
    icon: <IconDashboard />,
    path: "/",
  },
  {
    title: "Property",
    icon: <IconBuilding />,
    path: "/property",
  },
  {
    title: "Agent",
    icon: <IconPerson />,
    path: "/agent",
  },
  {
    title: "Review",
    icon: <IconStar />,
    path: "/review",
  },
  {
    title: "Message",
    icon: <IconMessage />,
    path: "/message",
  },
  {
    title: "My Profile",
    icon: <IconProfile />,
    path: "/profile",
  },
];
export const statusData: TDropdownData[] = [
  {
    value: "",
    label: "Any Status",
  },
  {
    value: "sale",
    label: "For sale",
  },
  {
    value: "rent",
    label: "For rent",
  },
];
