import { useSelector } from "react-redux";
import InternshipComponent from "../../Components/InternshipComponent";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Internshipdetails from "../../Components/Internshipdetails";
import SubMenu from "../../Components/SubMenu";
import Loader from "../../Components/Loader";

const Dashboard = () => {
  const loading = useSelector(
    (state: any) => state.internships.internshipsLoading
  );
  const internships = useSelector(
    (state: any) => state.internships.internships
  );
  const selectedId = useSelector((state: any) => state.layout.selectedId);
  const [id, setId] = useState("");
  if (loading) {
    return (
      <Loader />
    );
  }

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
                  setId={setId}
                />
              </motion.div>
            );
          }
        })}
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <motion.div
                className={`absolute top-0 left-0 w-full bg-secondary z-20 lg:px-[5rem] pt-[2rem] md:px-[2.5rem] px-[1rem]`}
              >
                <Internshipdetails id={id} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
