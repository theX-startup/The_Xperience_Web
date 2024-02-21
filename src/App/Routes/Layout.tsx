import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className={`min-h-full relative`}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
