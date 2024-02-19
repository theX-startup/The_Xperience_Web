import { useRef, useState } from "react";
import InternshipComponent from "../../App/Components/InternshipComponent";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import Internshipdetails from "../../App/Components/Internshipdetails";



const InternshipSec = () => {
  const scroll = useRef<HTMLDivElement>(null);
  const selectedId = useSelector((state: any) => state.layout.selectedId);
  const internships = useSelector(
    (state: any) => state.internships.internships
  );

  const [id, setId] = useState("");
  

  return (
    <>
      <div className="py-8 px-2 inknut-antiqua-medium relative" id="scroll">
        <div className="text-center">
          <h1 className="text_sm">
            You Need Experience : We Have More Than 70 Internship Positions
            Available For You To Explore
          </h1>
        </div>
        <div
          ref={scroll}
          className="flex flex-nowrap overflow-x-auto overflow-y-hidden gap-5 py-5 md:px-5 px-2 relative "
        >
          {internships.map((item: any, index: any) => {
            return (
              <motion.div
                layoutId={index.toString()}
                className="cursor-pointer min-w-[300px]"
                key={index}
              >
                <InternshipComponent index={index} setId={setId} data={item} />
              </motion.div>
            );
          })}
          <div></div>
        </div>
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
          >
            <motion.div
              className={`fixed h-full top-0 left-0 w-full bg-secondary z-20 lg:px-[5rem] pt-[2rem] md:px-[2.5rem] px-[1rem]`}
            >
              <Internshipdetails id={id} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InternshipSec;
