import { useRef, useState } from "react";
import { data } from "../../utils/constant/internshipData";
import InternshipComponent from "../../App/Components/InternshipComponent";
import { AnimatePresence, motion } from "framer-motion";


interface Item {
  companyName: string;
  product: string;
  price: string;
  duration: string;
  noOftasks: string;
  img: string;
  skills: string[];
}

const InternshipSec = () => {
  const scroll = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState("");
  const [item, setItem] = useState<Item>({
    companyName: "",
    product: "",
    price: "",
    duration: "",
    noOftasks: "",
    img: "",
    skills: [],
  });


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
          {data.map((item, index) => {
            return (
              <motion.div
                layoutId={index.toString()}
                className="cursor-pointer"
                key={index}
                onClick={() => {
                  setSelectedId(index.toString());
                  setItem(item);
                }}
              >
                <InternshipComponent data={item} />
              </motion.div>
              // <img src={item.img} alt="" />
            );
          })}
          <div></div>
        </div>
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="w-full h-full fixed top-0 bg-opacity-50 bg-slate-500 flex items-center justify-center z-50 md:px-10 px-2"
            onClick={() => {
              setSelectedId("");
              setItem({
                companyName: "",
                product: "",
                price: "",
                duration: "",
                noOftasks: "",
                img: "",
                skills: [],
              });
            }}
          >
            <motion.div className="w-full bg-secondary flex flex-col md:flex-row rounded-md">
              <motion.img
                src={item.img}
                alt=""
                className=" object-cover z-50 rounded-md"
              />
              <motion.div className="p-2">
                <motion.div className="flex justify-between md:flex-col">
                  <motion.h1 className="text_md text-[#0000FF] dark:text-white">
                    {item.companyName}
                  </motion.h1>
                  <motion.p className="text_md text-[#0000FF] dark:text-white">
                    {item.price}
                  </motion.p>
                </motion.div>
                <motion.div className="py-4 ">
                  <motion.h1 className="text_sm">{item.product}</motion.h1>
                </motion.div>
              </motion.div>
              <motion.div className="text-center md:py-5 md:px-3 md:text-justify max-w-[400px]">
                <motion.h1 className="underline text-center">Skills</motion.h1>
                <div className="flex flex-wrap items-center justify-center py-5">
                  {item.skills.map((skill, index) => {
                    return (
                      <motion.div key={index} className="p-2">
                        <motion.h1 className="text_sm">{skill}</motion.h1>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
            <div className="fixed bottom-0 w-full bg-[#0000FF] text-white h-[50px] flex items-center justify-center md:w-[200px] md:right-0 cursor-pointer">
              Start Internship
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InternshipSec;