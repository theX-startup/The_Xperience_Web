import { useRef } from "react";
import InternshipComponent from "../../App/Components/InternshipComponent";
import {  motion } from "framer-motion";
import { useSelector } from "react-redux";


const InternshipSec = () => {
  const scroll = useRef<HTMLDivElement>(null);
  const internships = useSelector(
    (state: any) => state.internships.internships
  );

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
              <motion.div className="cursor-pointer min-w-[300px]" key={index}>
                <InternshipComponent index={index} data={item} />
              </motion.div>
            );
          })}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default InternshipSec;
