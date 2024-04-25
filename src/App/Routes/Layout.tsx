import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useSelector } from "react-redux";
import ProfessionalNavBar from "../Components/ProfessionalNavBar";
import Loader from "../Components/Loader";
import FooterNav from "../Components/Footer";
import { useCookies } from "react-cookie";

const Layout = () => {
  const [cookies] = useCookies(["state"]);
  const loading = useSelector((state: any) => state.auth.loading);

  if (loading) {
    return <Loader />;
  }

  if (cookies.state === "PROFESSIONAL") {
    return (
      <div className={`min-h-screen relative`}>
        <ProfessionalNavBar />
        <Outlet />
        <FooterNav />
      </div>
    );
  } else {
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
