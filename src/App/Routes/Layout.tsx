import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import ProfessionalNavBar from "../Components/ProfessionalNavBar";

const Layout = () => {
  const user = useSelector((state: any) => state.auth.user);

  if (user.position === "pro") {
    return (
      <div className={`min-h-full relative`}>
        <ProfessionalNavBar />
        <Footer />
      </div>
    );
  }
  return (
    <div className={`min-h-full relative`}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
