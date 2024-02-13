import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
