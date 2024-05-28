import {
  BarChart,
  Layout,
  MessageSquare,
  MessageSquareTextIcon,
  MonitorPlay,
} from "lucide-react";
import SidebarItem from "./sidebar-item";
import { useLocation } from "react-router-dom";

export const guestRoutes = [
  {
    icon: Layout,
    label: "Dashbaord",
    path: "/",
    sub_menu: [],
    active: true,
  },
  {
    icon: Layout,
    label: "Internships",
    path: "/internships",
    sub_menu: [],
    active: true,
  },
  {
    icon: MessageSquare,
    label: "Community",
    path: "/internships",
    sub_menu: [],
    active: false,
  },
];

export const professionalRoutes = [
  {
    icon: MonitorPlay,
    label: "Internships",
    path: "/professional/internships",
    sub_menu: [],
    active: true,
  },
  {
    icon: BarChart,
    label: "Performance",
    path: "/professional/analytics",
    sub_menu: [
      {
        label: "Overview",
        path: "/professional/analytics",
      },
      {
        label: "Interns",
        path: "/professional/analytics/interns",
      },
    ],
    active: false,
  },
  {
    icon: MessageSquareTextIcon,
    label: "Community",
    path: "/professional/community",
    sub_menu: [],
    active: false,
  },
];

interface props {
  mobileView: boolean;
}

const SidebarRoutes = ({ mobileView }: props) => {
  const pathname = useLocation().pathname;

  const isProfessionalPage = pathname?.includes("/professional");
  const routes = isProfessionalPage ? professionalRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full ">
      {routes.map((route, index) => (
        <SidebarItem
          key={index}
          icon={mobileView ? undefined : route.icon}
          label={route.label}
          href={route.path}
          sub_menu={route.sub_menu}
          active={route.active}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
