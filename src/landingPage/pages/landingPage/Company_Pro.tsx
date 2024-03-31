import { comp } from "@/utils/constant/internshipData";
import slide12 from "../../../assets/images/slide12.png";
import { Button } from "flowbite-react";

type Props = {};

const Company_Pro = (props: Props) => {
  const {} = props;
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-20">
        <div className="mx-3 text-justify">
          <div className="lg:text-2xl text_sm">
            <div>
              <span className="">Transform </span>
              <span className="text-[#7F56D9]">Lives</span>
            </div>

            <div className="pt-2">
              <span>Through</span>
              <span className="text-[#7F56D9]"> Internship</span>
            </div>

            <div className="pt-2">
              <span>And</span>
              <span className="text-[#7F56D9]"> Mentorship</span>
            </div>
          </div>

          <div className="pt-5 text_sm">
            contribute to the growth of tech talent, and become a catalyst for
            positive change. Transform lives, shape the future, and
            revolutionize the tech landscape with the Xperience.
          </div>

          <div className="mt-5">
            <Button className="bg-[#7F56D9]">Get Started</Button>
          </div>

          <div className="flex">
            {comp.map((data, index) => {
              return (
                <div key={index} className="pt-5 flex">
                  <div >
                    <img src={data.logo} alt="image"/>
                  </div>
                  <div className="text_sm text-1x1 pl-1 pr-5">{data.text}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div>
            <img src={slide12} alt="" className="hidden md:flex h-72" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company_Pro;
