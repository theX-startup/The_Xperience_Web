import NavbarRoutes from "@/components/navbar-routes";
import MobileSideBar from "./mobile-sidebar";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const pathname = useLocation().pathname;
  const isPlayerPage = pathname?.includes("/internship");
  const isProfilePage = pathname?.includes("/profile");

  return (
    <div className={cn(
      "p-4 border-b h-full flex items-center bg-white shadow-sm",
      isPlayerPage && !isProfilePage && "border-0 shadow-none"
    )}>
      {!isPlayerPage && !isProfilePage && <MobileSideBar />}
      <NavbarRoutes />
    </div>
  );
};

export default NavBar;
