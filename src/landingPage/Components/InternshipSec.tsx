import React, { useRef, useState } from "react";
import { data } from "../../utils/constant/internshipData";
import InternshipComponent from "../../App/Components/InternshipComponent";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

type Props = {};

const InternshipSec = (props: Props) => {
  const scroll = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const container = scroll.current;
    if (!container) return;
    const scrollAmount = window.innerWidth; // Adjust this value as needed
    const newPosition =
      direction === "left"
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount;
    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };

  return (
    <div className="py-8 px-2 inknut-antiqua-medium relative">
      <div className="text-center">
        <h1>
          You Need Experience : We Have More Than 70 Internship Positions
          Available For You To Explore
        </h1>
      </div>
      <div
        ref={scroll}
        className="flex flex-nowrap overflow-x-auto gap-5 py-5 md:px-5 px-2 relative "
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
      >
        {data.map((item, index) => {
          return (
            <div className="cursor-pointer" key={index}>
              <InternshipComponent data={item} />
            </div>
            // <img src={item.img} alt="" />
          );
        })}
      </div>
      <IoIosArrowDropleftCircle
        onClick={() => handleScroll("left")}
        className=" absolute top-[20%] cursor-pointer text-secondary md:left-10"
        size={50}
      />
      <IoIosArrowDroprightCircle
        onClick={() => handleScroll("right")}
        className=" absolute top-[20%] right-5 text-secondary cursor-pointer "
        size={50}
      />
    </div>
  );
};

export default InternshipSec;
