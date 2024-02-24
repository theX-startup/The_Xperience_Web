import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type Props = {
  active: string;
};
const UserInternships = (props: Props) => {
  const { active } = props;
  console.log(active);
  const userInternships = useSelector(
    (state: any) => state.internships.userInternships
  );

  const navigate = useNavigate();
  const animation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: {
      opacity: 0,
      x: -100,
    },
  };
  if (active === "inProgress") {
    return (
      <motion.div
        variants={animation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="w-full mt-5 md:mt-0 px-2 "
      >
        {userInternships.map((internship: any, index: any) => {
          if (internship.progress === 0 || internship.progress > 100) {
            return (
              <motion.div
                variants={animation}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 * (index + 1) }}
                key={index}
                className="w-full md:w-full bg-tertiary p-2 rounded-lg mb-5 max-h-[190px] flex cursor-pointer"
                onClick={() => {
                  navigate(`tasks/${internship.internshipId}`);
                }}
              >
                <img
                  src={internship.image}
                  alt=""
                  className="max-h-[150px] w-[50%] lg:w-[40%] rounded-lg"
                />
                <div className="text-[10px] pl-3 flex flex-col justify-between md:text-[12px] lg:text-[15px]">
                  <h1 className="text-center">{internship.title}</h1>
                  <div className="w-full flex items-center justify-between">
                    <div className="w-[85%] bg-slate-300 h-2 rounded-full">
                      <div
                        className={`w-[${internship.progress}px] bg-[#0000ff]`}
                      ></div>
                    </div>
                    <p className="font-sans">{internship.progress}%</p>
                  </div>
                </div>
              </motion.div>
            );
          }
        })}
      </motion.div>
    );
  } else if (active === "finished") {
    return (
      <motion.div
        variants={animation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
        className="w-full mt-5 md:mt-0 px-2"
      >
        {userInternships.map((internship: any, index: any) => {
          if (internship.progress === 100) {
            return (
              <motion.div
                variants={animation}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 * (index + 1) }}
                key={index}
                className="w-full md:w-full bg-tertiary p-2 rounded-lg mb-5 max-h-[190px] flex cursor-pointer"
                onClick={() => {
                  navigate(`tasks/${internship.internshipId}`);
                }}
              >
                <img
                  src={internship.image}
                  alt=""
                  className="max-h-[150px] w-[50%] lg:w-[40%] rounded-lg"
                />
                <div className="pl-3 flex flex-col justify-between text-[10px] md:text-[12px] lg:text-[15px]">
                  <h1 className="text-center">{internship.title}</h1>
                  <div className="w-full flex items-center justify-between">
                    <div className="w-[85%] bg-slate-300 h-2 rounded-full">
                      <div
                        className={`w-[${internship.progress}px] bg-[#0000ff]`}
                      ></div>
                    </div>
                    <p className="font-sans">{internship.progress}%</p>
                  </div>
                </div>
              </motion.div>
            );
          }
        })}
      </motion.div>
    );
  } else {
    return (
      <motion.div
        variants={animation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
        className="w-full mt-5 md:mt-0 px-2"
      >
        {userInternships.map((internship: any, index: any) => {
          return (
            <motion.div
              variants={animation}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 * (index + 1) }}
              key={index}
              className="w-full md:w-full bg-tertiary p-2 rounded-lg mb-5 max-h-[190px] flex cursor-pointer"
              onClick={() => {
                navigate(`tasks/${internship.internshipId}`);
              }}
            >
              <img
                src={internship.image}
                alt=""
                className="max-h-[150px] w-[50%] lg:w-[40%] rounded-lg"
              />
              <div className="text-[10px] md:text-[12px] lg:text-[15px] pl-3 flex flex-col justify-between ">
                <h1 className="text-center">{internship.title}</h1>
                <div className="w-full flex items-center justify-between">
                  <div className="w-[85%] bg-slate-300 h-2 rounded-full">
                    <div
                      className={`w-[${internship.progress}px] bg-[#0000ff]`}
                    ></div>
                  </div>
                  <p className="font-sans">{internship.progress}%</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  }
};

export default UserInternships;
