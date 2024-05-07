import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useSelector } from "react-redux";
import Loader from "../Components/Loader";
import FooterNav from "../Components/Footer";
import SidebarNav from "../Components/Sidebar";

const Layout = () => {
  const loading = useSelector((state: any) => state.auth.loading);
  const pathname = useLocation().pathname;
  const isProfessionalPage = pathname.startsWith("/professional");

  if (loading) {
    return <Loader />;
  }

  if (!isProfessionalPage) {
    return (
      <div className="h-full">
        <div className="h-[80px] fixed inset-y-0 w-full z-50">
          <NavBar />
        </div>
        <div className="h-full pt-[80px]">
          <Outlet />
        </div>
        <FooterNav />
      </div>
    );
  } else {
    return (
      <div className="h-full">
        <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
          <NavBar />
        </div>
        <div className="hidden md:flex flex-col h-full w-56 fixed inset-y-0 z-50">
          <SidebarNav mobileView={false} />
        </div>
        <main className="md:pl-56 pt-[80px]">
          <div className="p-5">
            <Outlet />
          </div>
        </main>
      </div>
    );
  }
};
export default Layout;
