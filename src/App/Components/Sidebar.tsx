// import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";
import UserCard from "./user-card";
import { useAuth } from "@/redux/context";
import { cn } from "@/lib/utils";

interface props {
  mobileView: boolean;
}

const SidebarNav = ({ mobileView = false }: props) => {
  const pathname = useLocation().pathname;

  const isProfessionalPage = pathname?.includes("/professional");
  const { onLogout } = useAuth();

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      {isProfessionalPage && !mobileView ? (
        <div className="p-6">
          <Logo />
        </div>
      ) : (
        <UserCard mobileView={true} />
      )}
      <div className={cn("flex flex-col w-full", mobileView && "border-b")}>
        <SidebarRoutes mobileView={mobileView} />
      </div>
      {mobileView && (
        <div
          className="border-b py-4 transition-all hover:text-sky-600 hover:bg-slate-300/20 cursor-pointer"
          onClick={() => onLogout()}
        >
          <span className="text-slate-500 text-sm font-[500] pl-6  ">
            Logout
          </span>
        </div>
      )}
    </div>
  );
};

export default SidebarNav;
