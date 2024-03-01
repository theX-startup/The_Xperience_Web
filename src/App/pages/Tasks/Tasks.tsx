import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTasks } from "./_request";
import Loader from "../../Components/Loader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SelectedTask from "./components/SelectedTask";
import Introduction from "./Introduction";
import logo from "../../../assets/logos/logo.png";
import logoBlack from "../../../assets/logos/logoBlack.png";

const Tasks = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch<any>();
  const isLoading = useSelector((state: any) => state.internships.taskLoading);
  const tasks = useSelector((state: any) => state.internships.tasks);
  useEffect(() => {
    dispatch(getTasks(id));
  }, []);
  const user = useSelector((state: any) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const animate = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  if (isLoading) return <Loader />;
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-secondary border-b border-gray-300  dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={() => {
                  setMobileIsOpen(!mobileIsOpen);
                }}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule={"evenodd"}
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <div className="flex ms-2 md:me-24">
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
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded={isOpen}
                    onClick={toggleDropdown}
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded"
                      src={user.picturePath}
                      alt="user photo"
                    />
                  </button>
                </div>
                {isOpen && (
                  <motion.div
                    variants={animate}
                    initial="hidden"
                    animate="visible"
                    className="z-50 absolute right-10 top-[70%] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-sm text-gray-900 dark:text-white"
                        role="none"
                      >
                        {user.fullname}
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                      >
                        {user.email}
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <Link
                          to={"/dashboard"}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          mobileIsOpen ? "translate-x-0" : "-translate-x-full"
        }  border-r border-gray-200 sm:translate-x-0 bg-secondary dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-secondary">
          <div>
            <div className="w-full border flex items-center justify-center p-1 rounded">
              <img src={tasks.image} className="rounded" alt="" />
            </div>
            <div>
              <h1 className="mt-4 text_sm text-center font-semibold text-[#0000ff]">
                {tasks.title}
              </h1>
            </div>
          </div>
          <ul className="space-y-2 font-medium mt-5">
            {tasks.task?.map((task: any, index: any) => {
              return (
                <li key={index}>
                  <div
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
                    onClick={() => {
                      setSelectedId(task._id);
                      setMobileIsOpen(false);
                    }}
                  >
                    <span className="text_sm font-sans uppercase">
                      {task.week} : <span>{task.title}</span>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <div className="p-5 sm:ml-64 bg-secondary ">
        <div className="p-4 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700 mt-14 min-h-[95vh]">
          {selectedId === "" ? (
            <Introduction id={id} />
          ) : (
            <SelectedTask id={selectedId} />
          )}
        </div>
      </div>
    </>
  );
};

export default Tasks;
