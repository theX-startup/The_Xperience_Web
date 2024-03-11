import { about } from "@/utils/constant/internshipData";
import AnimatedPage from "../../../utils/AnimatedPage";

const About = () => {
  return (
    <AnimatedPage>
      <div className=" bg-white">
        <div className="text-center pt-10 text-2xl">
          <div className="lg:text-2xl text_sm">{about.firstSlide}</div>
          <div className="lg:text-2xl text-blue-500 pb-2 text_sm">
            {about.secondSlide}
          </div>
          <div className="border-solid border-2 border-gray-300 w-52"></div>
          <div className="border-solid border-2 border-transparent lg:px-24 py-5">
            <div className="flex justify-center">
              <img src={about.image1} alt="" className="lg:h-[85vh]" />
            </div>
            <div className="text_sm lg:text-2xl mt-[-80px] lg:mt-[-100px]">
              {about.firstSlide}
            </div>
            <div className="lg:text-2xl text-blue-500 pb-2 text_sm mb-5">
              {about.thirdSlide}
            </div>
            <div className="flex justify-center">
              <img src={about.image2} alt="" className="lg:h-[50vh]" />
            </div>
          </div>
        </div>
        <div>
          <div className="pt-5 pb-3 mx-5 ">
            <span className="lg:text-2xl text_sm">Our </span>
            <span className="text-blue-500 lg:text-2xl text_sm ">Mission</span>
          </div>
          <div className="border-solid border-2 border-gray-300 w-52 mx-5"></div>
          <div className="lg:text-1xl text_sm py-3 text-justify mx-5 leading-6">
            {about.fourthSlide}
          </div>
        </div>

        <div>
          <div className="pt-5 pb-3 mx-5 ">
            <span className="lg:text-2xl text_sm">Our </span>
            <span className="text-blue-500 lg:text-2xl text_sm ">Vision</span>
          </div>
          <div className="border-solid border-2 border-gray-300 w-52 mx-5"></div>
          <div className="lg:text-1xl text_sm py-3 text-justify mx-5 leading-6">
            {about.fifthSlide}
          </div>
        </div>
        <div className="text-center text-blue-500 pt-12 lg:text-2xl text_sm">
          {about.sixthSlide}
        </div>
        <div className="mt-5 text-center">{about.seventhSlide}</div>
      </div>
    </AnimatedPage>
  );
};

export default About;
