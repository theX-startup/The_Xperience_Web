import ProfessionalNavBar from "../Components/ProfessionalNavBar";
import FooterNav from "../Components/Footer";
import { Outlet } from "react-router-dom";

const CreateInternshipLayout = () => {
  return (
    <div>
      <ProfessionalNavBar />
      <Outlet />
      <FooterNav />
    </div>
  );
};

export default CreateInternshipLayout;
