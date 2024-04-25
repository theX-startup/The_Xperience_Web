import { useState } from "react";
import logo from "../../assets/logos/logo.png";
import logoBlack from "../../assets/logos/logoBlack.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="lg:px-7 px-3 flex items-center justify-between relative border-b shadow-md py-3"
      onScroll={() => {
        console.log("scroll");
      }}
    >
      <div>
        <img src={logoBlack} alt="Logo" className="h-[35px] md:h-[40px] lg:h-[45px] dark:hidden" />
        <img
          src={logo}
          alt="Logo"
          className="h-[35px] md:h-[40px] lg:h-[45px] hidden dark:block"
        />
      </div>

      <div
        className="h-10 w-10 flex flex-col gap-1 items-center justify-center cursor-pointer md:hidden"
        onClick={() => setActive(!active)}
      >
        <div
          className={`h-0.5 w-5 bg-black transform transition-all duration-300 ${
            active ? "rotate-45 translate-y-1" : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-5 bg-black transform transition-all duration-300 ${
            active ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-5 bg-black transform transition-all duration-300 ${
            active ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      <div
        className={`inknut-antiqua-semibold bg-secondary mobile-nav desktop-nav tablet-nav  items-center shadow-lg md:shadow-none ${
          active ? "block" : "hidden"
        }`}
      >
        <div>
          <ul className="md:flex gap-5 md:text-xs block lg:text-sm">
            <Link to={"/"}>
              <li className="nav-item">Home</li>
            </Link>
            <Link to={"company_professional"}>
              <li className="nav-item">Company / Professionals</li>
            </Link>
            <Link to={"resources"}>
              <li className="nav-item">Resources</li>
            </Link>
            <Link to={"about"}>
              <li className="nav-item">About us</li>
            </Link>
            <Link to={"contact_us"}>
              <li className="nav-item">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="flex lg:gap-5 md:flex-row flex-col md:gap-2 gap-2 p-4 md:p-0">
          <Link to={"login"} className="btn cursor-pointer">
            Login
          </Link>
          <Link to={"register"} className="btn cursor-pointer">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
