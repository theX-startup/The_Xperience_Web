import FooterNav from "../../App/Components/Footer";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterNav />
    </div>
  );
};

export default Layout;
