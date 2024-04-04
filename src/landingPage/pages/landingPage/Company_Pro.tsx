import { comp, images } from "@/utils/constant/internshipData";
import slide12 from "../../../assets/images/slide12.png";
import { Button } from "flowbite-react";
import CompanyForm from "./CompanyForm/CompanyForm";
import Blog from "./CompanyForm/Blog";

const Company_Pro = () => {
  return (
    <div className="mt-10 sm:pl-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-20">
        <div className="mx-3 text-justify">
          <div className="sm:text-2xl text_sm">
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

          <div className="pt-8">
            <Button className="bg-[#7F56D9]">Get Started</Button>
          </div>

          <div className="flex text_sm py-5">
            {comp.map((data, index) => {
              return (
                <div key={index} className="pt-5 flex">
                  <div>
                    <img src={data.logo} alt="image" className="h-5" />
                  </div>
                  <div className="xs:pl-0 pl-1 lg:pl-2 pr-5">{data.text}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <img src={slide12} alt="" className="hidden md:flex h-64" />
          </div>
        </div>
      </div>

      <div className="flex justify-around text_sm pl-2">
        <div className="pt-5">
          <div className="text-lg font-semibold text-[#7F56D9]">250 +</div>
          <div>Collaboration</div>
        </div>
        <div>
          <img src={images.firstImg} alt="" className="h-20 lg:h-24" />
        </div>
        <div>
          <img src={images.secondImg} alt="" className="h-20 lg:h-24" />
        </div>
        <div>
          <img src={images.thirdImg} alt="" className="h-20 lg:h-24" />
        </div>
        <div className="pt-7 lg:pt-10 font-semibold text-[#7F56D9]">
          SIYANBOLA DAMILOLA
        </div>
      </div>
      <CompanyForm />
      <Blog/>
    </div>
  );
};

export default Company_Pro;
