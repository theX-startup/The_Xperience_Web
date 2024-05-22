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
  },
  {
    icon: Layout,
    label: "Internships",
    path: "/internships",
    sub_menu: [],
  },
  {
    icon: MessageSquare,
    label: "Community",
    path: "/internships",
    sub_menu: [],
  },
];

export const professionalRoutes = [
  {
    icon: MonitorPlay,
    label: "Internships",
    path: "/professional/internships",
    sub_menu: [],
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
  },
  {
    icon: MessageSquareTextIcon,
    label: "Community",
    path: "/professional/community",
    sub_menu: [],
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
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
