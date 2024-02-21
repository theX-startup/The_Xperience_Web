import logo from "../../assets/logos/logo.png";
import logoBlack from "../../assets/logos/logoBlack.png";
import { MdOutlineMenu } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useAuth } from "../../redux/context";

const NavBar = () => {
  const user = useSelector((state: any) => state.auth.user);
  const initials = user?.fullname
    ?.split(" ")
    .map((n: string) => n[0])
    .join("");
  const [menuActive, setMenuActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const { onLogout } = useAuth();

  return (
    <div className="relative px-5 xl:px-[10rem] lg:px-[5rem] flex items-center justify-between">
      <div className="flex sm:items-center sm:flex-row flex-col w-full">
        <div className="flex items-center justify-between sm:justify-normal">
          <div>
            <MdOutlineMenu
              className="text-[30px] sm:text-[40px] lg:hidden "
              onClick={() => setMobileMenuActive(!mobileMenuActive)}
            />
            {mobileMenuActive && (
              <div
                className="w-full absolute top-0 h-[100vh] left-0 z-20 bg-tertiary"
                style={{
                  background: "rgba(0,0,0,0.7)",
                }}
              >
                <motion.div
                  className=" w-[70%] sm:w-[250px] h-full bg-secondary shadow-lg  p-3"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="min-h-[35px] w-full flex justify-between items-center pb-5">
                    <div className="flex items-center gap-2">
                      {user.picturePath ? (
                        <img
                          src={user.picturePath}
                          alt=""
                          className="h-[40px] w-[40px] rounded-md"
                        />
                      ) : (
                        <div className="w-[30px] h-[30px] bg-[#0000ff] rounded cursor-pointer items-center flex justify-center dark:bg-white dark:text-black text-white font-bold relative">
                          <span className="text-[10px]">{initials}</span>
                        </div>
                      )}
                      <span className="text-[8px] uppercase text-[#0000ff] dark:text-white">
                        {user?.fullname}
                      </span>
                    </div>
                    <IoMdClose
                      className="text-[20px] cursor-pointer"
                      onClick={() => setMobileMenuActive(!mobileMenuActive)}
                    />
                  </div>
                  <Link
                    to={"/profile"}
                    className="block pb-3 text-[10px] hover:text-[#0000ff] transition-all duration-500 ease-in-out text-slate-700 dark:text-slate-200"
                  >
                    Dashboard
                  </Link>
                  <div
                    className={`overflow-hidden pb-3 transition-all duration-500 ${
                      activeMenu === "profile" ? "max-h-[120px]" : "h-[28px]"
                    }`}
                  >
                    <div className="flex items-center justify-between pb-2">
                      <Link
                        to={""}
                        className="block text-[10px] hover:text-[#0000ff] text-slate-700 dark:text-slate-200"
                      >
                        Profile
                      </Link>
                      {activeMenu === "profile" ? (
                        <IoIosArrowUp
                          className="text-[20px] cursor-pointer"
                          onClick={() =>
                            setActiveMenu(
                              activeMenu === "profile" ? "" : "profile"
                            )
                          }
                        />
                      ) : (
                        <IoIosArrowDown
                          className="text-[20px] cursor-pointer"
                          onClick={() =>
                            setActiveMenu(
                              activeMenu === "profile" ? "" : "profile"
                            )
                          }
                        />
                      )}
                    </div>
                    <div className="bg-tertiary p-3 rounded">
                      <Link
                        to={"/logout"}
                        className="block pb-3 text-[10px] hover:text-[#0000ff] transition-all duration-500 ease-in-out"
                      >
                        Certificate
                      </Link>
                      <Link
                        to={"/logout"}
                        className="block text-[10px] hover:text-[#0000ff] transition-all duration-500 ease-in-out"
                      >
                        CV
                      </Link>
                    </div>
                  </div>

                  <Link
                    to={"/internships"}
                    className="block pb-3 text-[10px] hover:text-[#0000ff] transition-all duration-500 ease-in-out text-slate-700 dark:text-slate-200"
                  >
                    Internships
                  </Link>
                  <div
                    className={`${
                      activeMenu === "performance"
                        ? "max-h-[120px]"
                        : "h-[28px]"
                    } overflow-hidden pb-3`}
                  >
                    <div className="flex items-center justify-between pb-2">
                      <Link
                        to={""}
                        className="block text-[10px] hover:text-[#0000ff] transition-all duration-500 ease-in-out text-slate-700 dark:text-slate-200"
                      >
                        Performance
                      </Link>
                      {activeMenu === "performance" ? (
                        <IoIosArrowUp
                          className="text-[20px] cursor-pointer"
                          onClick={() =>
                            setActiveMenu(
                              activeMenu === "performance" ? "" : "performance"
                            )
                          }
                        />
                      ) : (
                        <IoIosArrowDown
                          className="text-[20px] cursor-pointer"
                          onClick={() =>
                            setActiveMenu(
                              activeMenu === "performance" ? "" : "performance"
                            )
                          }
                        />
                      )}
                    </div>
                    <div className="bg-tertiary p-3 rounded">
                      <Link
                        to={"/logout"}
                        className="block text-[10px] hover:text-[#0000ff] transition-all duration-500 ease-in-out "
                      >
                        Leaderboard
                      </Link>
                    </div>
                  </div>
                  <Link
                    to={"/logout"}
                    className="block pb-3 text-[10px] hover:text-[#0000ff] transition-all duration-500 ease-in-out text-slate-700 dark:text-slate-200"
                  >
                    Community
                  </Link>
                  <Link
                    to={"../"}
                    onClick={() => {
                      onLogout();
                    }}
                    className=" cursor-pointer block text-[10px] hover:text-[#0000ff] transition-all duration-500 ease-in-out text-slate-700 dark:text-slate-200"
                  >
                    Logout
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
          <div>
            <Link to={"/"}>
              <img src={logo} alt="" className="w-[80px] hidden dark:block" />
            </Link>
            <Link to={"/"}>
              <img
                src={logoBlack}
                alt=""
                className="w-[80px] dark:hidden block"
              />
            </Link>
          </div>
        </div>
        <div>
          <div className="w-full md:w-[450px] lg:w-[600px] h-[40px] bg-secondary border border-black dark:border-white rounded flex">
            <input
              type="search"
              name=""
              id=""
              className="w-full h-full outline-none bg-secondary text-[12px] p-2 py-4 rounded "
              placeholder="Search Internships"
            />
            <button className="bg-tertiary w-[40px] h-full rounded-r-sm flex items-center justify-center">
              <IoSearchOutline className="" />
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <div
          className="hidden sm:block relative z-20"
          onClick={() => setMenuActive(!menuActive)}
        >
          {user.picturePath ? (
            <img
              src={user.picturePath}
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
          ) : (
            <div className="w-[40px] h-[40px] bg-[#0000ff] rounded-md cursor-pointer items-center flex justify-center dark:bg-white dark:text-black text-white font-bold relative">
              <span className="text-[14px]">{initials}</span>
              <span className="absolute p-1 border bg-green-600 rounded-full top-[80%] left-[80%]"></span>
            </div>
          )}
          {menuActive && (
            <motion.div
              className=""
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-[120%] right-0 w-[170px] bg-tertiary rounded shadow-lg p-3 ">
                <Link
                  to={"/"}
                  className="block pb-3 text-[12px] hover:text-[#0000ff] dark:hover:text-[#0000ff] transition-all duration-500 ease-in-out dark:text-slate-700 text-slate-200"
                >
                  Dashboard
                </Link>
                <div className="h-[1px] bg-secondary mb-3"></div>
                <Link
                  to={"/"}
                  className="block pb-3 text-[12px] hover:text-[#0000ff] dark:hover:text-[#0000ff] transition-all duration-500 ease-in-out dark:text-slate-700 text-slate-200"
                >
                  Profile
                </Link>
                <Link
                  to={"/"}
                  className="block pb-3 text-[12px] hover:text-[#0000ff] dark:hover:text-[#0000ff] transition-all duration-500 ease-in-out dark:text-slate-700 text-slate-200"
                >
                  Certificate
                </Link>
                <Link
                  to={"/"}
                  className="block pb-3 text-[12px] hover:text-[#0000ff] dark:hover:text-[#0000ff] transition-all duration-500 ease-in-out dark:text-slate-700 text-slate-200"
                >
                  CV
                </Link>
                <div className="h-[1px] bg-secondary mb-3"></div>
                <Link
                  to={"/internships"}
                  className="block pb-3 text-[12px] hover:text-[#0000ff] dark:hover:text-[#0000ff] transition-all duration-500 ease-in-out dark:text-slate-700 text-slate-200"
                >
                  Internships
                </Link>
                <div className="h-[1px] bg-secondary mb-3"></div>
                <Link
                  to={"/"}
                  className="block pb-3 text-[12px] hover:text-[#0000ff] dark:hover:text-[#0000ff] transition-all duration-500 ease-in-out dark:text-slate-700 text-slate-200"
                >
                  Performance
                </Link>
                <Link
                  to={"/"}
                  className="block pb-3 text-[12px] hover:text-[#0000ff] dark:hover:text-[#0000ff] transition-all duration-500 ease-in-out dark:text-slate-700 text-slate-200"
                >
                  Leaderboard
                </Link>
                <div className="h-[1px] bg-secondary mb-3"></div>
                <Link
                  to={"/"}
                  className="block pb-3 text-[12px] hover:text-[#0000ff] dark:hover:text-[#0000ff] transition-all duration-500 ease-in-out dark:text-slate-700 text-slate-200"
                >
                  Community
                </Link>
                <div className="h-[1px] bg-secondary mb-3"></div>
                <Link
                  to={"../"}
                  onClick={() => {
                    onLogout();
                  }}
                  className="block text-[12px] hover:text-[#0000ff] dark:hover:text-[#0000ff] transition-all duration-500 ease-in-out dark:text-slate-700 text-slate-200"
                >
                  Logout
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
