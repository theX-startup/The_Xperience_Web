import { useDispatch, useSelector } from "react-redux";
import InternshipComponent from "../../Components/InternshipComponent";
import { motion } from "framer-motion";
import SubMenu from "../../Components/SubMenu";
import { useEffect } from "react";
import { getInternships } from "./_request";

const InternDashboard = () => {
  const internships = useSelector(
    (state: any) => state.internships.internships
  );
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getInternships());
  }, []);
  return (
    <div>
      <div>
        <SubMenu />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:px-[10rem] gap-5 items-center justify-center p-5 lg:px-[5rem]">
        {internships.map((internship: any, index: any) => {
          if (index < 12) {
            return (
              <motion.div
                layoutId={index.toString()}
                key={index}
                className="cursor-pointer"
              >
                <InternshipComponent
                  data={internship}
                  key={internship._id}
                  index={index}
                />
              </motion.div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default InternDashboard;
