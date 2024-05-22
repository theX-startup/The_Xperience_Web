import NavbarRoutes from "@/components/navbar-routes";
import MobileSideBar from "./mobile-sidebar";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const pathname = useLocation().pathname;
  const isPlayerPage = pathname?.includes("/internship");

  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      {!isPlayerPage && <MobileSideBar />}
      <NavbarRoutes />
    </div>
  );
};

export default NavBar;
