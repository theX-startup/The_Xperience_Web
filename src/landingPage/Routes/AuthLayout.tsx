import { Outlet } from "react-router-dom";
import img from "../../assets/images/loginImg.png";


const AuthLayout = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <div className="h-[100%] hidden md:block">
        <img src={img} className="h-[100%]" alt="" />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
