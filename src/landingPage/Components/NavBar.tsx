import { useState } from "react";
import logo from "../../assets/logos/logo.png";
import logoBlack from "../../assets/logos/logoBlack.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="bg-tertiary lg:px-7 md:px-3 flex items-center justify-between relative border-b shadow-md "
      onScroll={() => {
        console.log("scroll");
      }}
    >
      <div>
        <img src={logoBlack} alt="Logo" className="w-[60px] hidden dark:flex" />
        <img
          src={logo}
          alt="Logo"
          className="w-[60px] bg-tertiary dark:hidden"
        />
      </div>

      <div
        className="h-10 w-10 flex flex-col gap-1 items-center justify-center cursor-pointer md:hidden"
        onClick={() => setActive(!active)}
      >
        <div
          className={`h-0.5 w-5 bg-secondary transform transition-all duration-300 ${
            active ? "rotate-45 translate-y-1" : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-5 bg-secondary transform transition-all duration-300 ${
            active ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-5 bg-secondary transform transition-all duration-300 ${
            active ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      <div
        className={`inknut-antiqua-semibold mobile-nav desktop-nav tablet-nav  items-center bg-tertiary shadow-lg md:shadow-none ${
          active ? "block" : "hidden"
        }`}
      >
        <div>
          <ul className="md:flex gap-5 text-secondary md:text-xs block lg:text-sm">
            <Link to={""}>
              <li className="nav-item">Home</li>
            </Link>
            <Link to={""}>
              <li className="nav-item">Company / Professionals</li>
            </Link>
            <Link to={"rosources"}>
              <li className="nav-item">Resources</li>
            </Link>
            <Link to={"about"}>
              <li className="nav-item">About us</li>
            </Link>
          </ul>
        </div>
        <div className="flex lg:gap-5 md:flex-row flex-col md:gap-2 gap-2 p-4 md:p-0">
          <Link to={"login"} className="btn cursor-pointer text-secondary">
            Login
          </Link>
          <Link to={"register"} className="btn cursor-pointer text-secondary">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
