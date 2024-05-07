import { BarChart, Layout, MonitorPlay } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { useLocation } from "react-router-dom";

export const guestRoutes = [
  {
    icon: Layout,
    label: "Dashbaord",
    path: "/",
  },
  {
    icon: Layout,
    label: "Internships",
    path: "/internships",
  },
];

export const professionalRoutes = [
  {
    icon: MonitorPlay,
    label: "Internships",
    path: "/professional/internships",
  },
  {
    icon: BarChart,
    label: "Analytics",
    path: "/professional/analytics",
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
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
