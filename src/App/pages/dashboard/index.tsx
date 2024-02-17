import { useSelector } from "react-redux";
import InternshipComponent from "../../Components/InternshipComponent";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Dashboard = () => {
  const loading = useSelector(
    (state: any) => state.internships.internshipLoading
  );
  const internships = useSelector(
    (state: any) => state.internships.internships
  );
  const [selectedId, setSelectedId] = useState("");
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:px-[10rem] gap-5 items-center justify-center p-5 lg:px-[5rem]">
      {internships.map((internship: any, index: any) => {
        if (index < 12) {
          return (
            <motion.div
              // layoutId={(index + 1).toString()}
              key={index}
              onClick={() => setSelectedId((index).toString())}
              className="cursor-pointer"
            >
              <InternshipComponent data={internship} key={internship._id} />
            </motion.div>
          );
        }
      })}
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} onClick={() => setSelectedId("")}>
            <div className="fixed top-0 w-full h-full bg-secondary z-20">
              Trade details Here
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
