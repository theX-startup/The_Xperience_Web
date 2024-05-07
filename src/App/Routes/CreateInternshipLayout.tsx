
import FooterNav from "../Components/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const CreateInternshipLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterNav />
    </div>
  );
};

export default CreateInternshipLayout;
