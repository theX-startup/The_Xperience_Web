import { BsTwitterX } from "react-icons/bs";
import logo from "../../assets/logos/logo.png";
import logoBlack from "../../assets/logos/logoBlack.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="shadow-lg shadow-black mt-10 dark:shadow-white">
      <div></div>
      <div className="flex md:px-10 justify-between flex-col md:flex-row items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt=""
            className="w-14 h-14 md:w-20 md:h-20 object-cover object-center hidden dark:flex"
          />
          <img
            src={logoBlack}
            alt=""
            className="w-14 h-14 md:w-20 md:h-20 object-cover object-center block dark:hidden"
          />
          <p className="text-[12px]">
            © The Xperience, Inc. All rights reserved.
          </p>
        </div>
        <div className="w-[100%] flex md:justify-end">
          <div className="flex px-5 py-4 justify-between items-center md:w-[300px]">
            <div className="w-[40px] h-[40px] flex items-center justify-center dark:hover:bg-slate-600 rounded-full transform transition-all cursor-pointer">
              <BsTwitterX />
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center dark:hover:bg-slate-600 rounded-full transform transition-all cursor-pointer">
              <FaFacebook />
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center dark:hover:bg-slate-600 rounded-full transform transition-all cursor-pointer">
              <FaInstagram />
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center dark:hover:bg-slate-600 rounded-full transform transition-all cursor-pointer">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
