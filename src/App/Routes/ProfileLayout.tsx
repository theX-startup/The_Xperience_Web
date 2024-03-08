import FooterNav from "../Components/Footer";
import ProfileNav from "../Components/ProfileNav";
import { Outlet } from "react-router-dom";



const ProfileLayout = () => {
  return (
    <div>
      <ProfileNav />
      <Outlet />
      <FooterNav />
    </div>
  );
};

export default ProfileLayout;
