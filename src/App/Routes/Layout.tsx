import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useSelector } from "react-redux";
import ProfessionalNavBar from "../Components/ProfessionalNavBar";
import Loader from "../Components/Loader";
import FooterNav from "../Components/Footer";

const Layout = () => {
  const user = useSelector((state: any) => state.auth.user);
  const loading = useSelector((state: any) => state.auth.loading);

  if (loading) {
    return <Loader />;
  }

  if (user.position === "pro") {
    return (
      <div className={`min-h-full relative`}>
        <ProfessionalNavBar />
        <Outlet />
        <FooterNav />
      </div>
    );
  }

  if (user.position === "intern") {
    return (
      <div className={`min-h-full relative`}>
        <NavBar />
        <Outlet />
        <FooterNav />
      </div>
    );
  }
};

export default Layout;
