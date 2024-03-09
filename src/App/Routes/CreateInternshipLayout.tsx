import ProfessionalNavBar from "../Components/ProfessionalNavBar";
import FooterNav from "../Components/Footer";
import Side from "../pages/createInternship/SideBar";

const CreateInternshipLayout = () => {
  return (
    <div>
      <ProfessionalNavBar />
      <Side />
      <FooterNav />
    </div>
  );
};

export default CreateInternshipLayout;
