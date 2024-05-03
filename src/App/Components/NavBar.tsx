import logo from "../../assets/logos/logo.png";
import logoBlack from "../../assets/logos/logoBlack.png";
import { MdOutlineMenu } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useAuth } from "../../redux/context";
import { SearchInput } from "@/components/search-input";
import { BellIcon, LogOut, MessageSquareText } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCookies } from "react-cookie";

const NavBar = () => {
  const user = useSelector((state: any) => state.auth.user);
  const initials = user?.fullname
    ?.split(" ")
    .map((n: string) => n[0])
    .join("");
  const [menuActive, setMenuActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const { onLogout } = useAuth();
  const { internshipId } = useParams();
  const [cookies, setCookies] = useCookies(["state"]);

  return (
    <div
      className={cn(
        "relative px-5 flex items-center justify-between py-5",
        internshipId && "px-0 xl:px-0 lg:px-0"
      )}
    >
      <div className="flex sm:items-center sm:flex-row flex-col w-full md:w-[65%] gap-5 lg:gap-8">
        <div className="flex items-center justify-between sm:justify-normal">
          <div>
            <MdOutlineMenu
              className={cn(
                "text-[30px] sm:text-[40px] lg:hidden",
                internshipId && "hidden"
              )}
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
                  <div className="min-h-[35px] w-full flex justify-between items-center pb-5 relative">
                    <div className="flex items-start gap-1 ">
                      {user.picturePath ? (
                        <img
                          src={user.picturePath}
                          alt=""
                          className="h-[40px] w-[40px] rounded-md"
                        />
                      ) : (
                        <div className="w-[40px] h-[40px] bg-black rounded cursor-pointer items-center flex justify-center dark:bg-white dark:text-black text-white font-bold relative">
                          <span className="text-[10px]">{initials}</span>
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm text-black uppercase dark:text-white">
                          {user?.fullname}
                        </span>
                        <span className="text-xs text-slate-400">
                          {user?.email}
                        </span>
                      </div>
                    </div>
                    <IoMdClose
                      className="text-[20px] dark:text-white text-black cursor-pointer absolute right-0 top-0"
                      onClick={() => setMobileMenuActive(!mobileMenuActive)}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 border-b pb-2`}
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        to={`profile/${user._id}`}
                        className="block text-lg hover:text-[#0000ff] text-slate-700 dark:text-slate-200"
                      >
                        Profile
                      </Link>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      onLogout();
                    }}
                    className=" cursor-pointer block text-lg hover:text-[#0000ff] transition-all duration-500 ease-in-out text-slate-700 dark:text-slate-200 pt-2"
                  >
                    Logout
                  </div>
                </motion.div>
              </div>
            )}
          </div>
          {!internshipId && (
            <div>
              <Link to={"/"}>
                <img
                  src={logo}
                  alt=""
                  className="h-[35px] md:h-[40px] lg:h-[45px] hidden dark:block"
                />
              </Link>
              <Link to={"/"}>
                <img
                  src={logoBlack}
                  alt=""
                  className="h-[35px] md:h-[40px] lg:h-[45px] dark:hidden block"
                />
              </Link>
            </div>
          )}
        </div>
        {!internshipId && <SearchInput />}
      </div>
      <div className="flex items-center justify-between">
        {!internshipId && (
          <div className="md:flex items-center justify-between gap-x-5 hidden">
            <div
              onClick={() => {
                if (cookies.state === "PROFESSIONAL") {
                  setCookies("state", "INTERN");
                } else {
                  setCookies("state", "PROFESSIONAL");
                }
              }}
              className="cursor-pointer hover:text-slate-500 transition-all"
            >
              {cookies.state === "PROFESSIONAL" ? "Interns" : "Professionals"}
            </div>
            <div className="cursor-pointer text-muted">
              <MessageSquareText />
            </div>
            <div className="cursor-pointer text-muted">
              <BellIcon />
            </div>
          </div>
        )}
        <div
          className={cn(
            "hidden sm:flex items-center gap-x-5",
            internshipId && "flex"
          )}
        >
          <div>
            {internshipId && (
              <Link
                to={"../"}
                className="flex gap-x-2 items-center text-slate-700 hover:text-slate-800 transition-all"
              >
                <LogOut />
                Exit
              </Link>
            )}
          </div>
          <div
            className={cn(
              "hidden sm:block relative z-20",
              internshipId && "block"
            )}
            onClick={() => setMenuActive(!menuActive)}
          >
            {user.picturePath ? (
              <img
                src={user.picturePath}
                alt=""
                className="h-[40px] w-[40px] rounded cursor-pointer"
              />
            ) : (
              <div className="w-[40px] h-[40px] bg-black rounded-md cursor-pointer items-center flex justify-center dark:bg-white dark:text-black text-white font-bold relative">
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
                <div className="absolute top-[120%] right-0 w-[170px] bg-tertiary rounded shadow-lg">
                  <Link
                    to={`profile/${user._id}`}
                    className="block p-5 text-sm hover:bg-slate-700 transition-all duration-500 ease-in-out dark:text-slate-700 text-slate-200 rounded"
                  >
                    Profile
                  </Link>
                  <div
                    onClick={() => {
                      onLogout();
                    }}
                    className="rounded cursor-pointer p-5 block text-sm hover:bg-slate-700 transition-all duration-500 ease-in-out dark:text-slate-700 text-slate-200"
                  >
                    Logout
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
