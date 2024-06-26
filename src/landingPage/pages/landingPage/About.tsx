import { about, contact } from "@/utils/constant/internshipData";
import AnimatedPage from "../../../utils/AnimatedPage";

const About = () => {
  return (
    <AnimatedPage>
      <div className=" bg-white">
        <div className="text-center pt-10 text-2xl">
          <div className="sm:text-2xl text_sm">{about.firstSlide}</div>
          <div className="sm:text-2xl text-blue-500 pb-2 text_sm">
            {about.secondSlide}
          </div>
          <div className="flex justify-center">
            <div className="border-solid border-2 border-gray-300 sm:w-72 w-44"></div>
          </div>

          <div className="border-solid border-2 border-transparent sm:px-24 py-5">
            <div className="flex justify-center">
              <img src={about.image1} alt="" className="sm:h-[85vh]" />
            </div>
            <div className="text_sm sm:text-2xl mt-[-80px] sm:mt-[-100px]">
              {about.firstSlide}
            </div>
            <div className="sm:text-2xl text-blue-500 pb-2 text_sm">
              {about.thirdSlide}
            </div>
            <div className="flex justify-center pb-10">
              <div className="border-solid border-2 border-gray-300 sm:w-72 w-44"></div>
            </div>
            <div className="flex justify-center">
              <img src={about.image2} alt="" className="sm:h-[50vh]" />
            </div>
          </div>
        </div>
        <div>
          <div className="pt-5 pb-3 px-8 sm:px-20 ">
            <span className="sm:text-2xl text_sm">Our </span>
            <span className="text-blue-500 sm:text-2xl text_sm ">Mission</span>
          </div>
          <div className="border-solid border-2 border-gray-300 w-52 mx-8 sm:mx-20"></div>
          <div className="sm:text-1xl text_sm py-3 text-justify px-8 sm:px-20 leading-6">
            {about.fourthSlide}
          </div>
        </div>

        <div>
          <div className="pt-5 pb-3 px-8 sm:px-20 ">
            <span className="sm:text-2xl text_sm">Our </span>
            <span className="text-blue-500 sm:text-2xl text_sm ">Vision</span>
          </div>
          <div className="border-solid border-2 border-gray-300 w-52 mx-8 sm:mx-20"></div>
          <div className="sm:text-1xl text_sm py-3 text-justify px-8 sm:px-20 leading-6">
            {about.fifthSlide}
          </div>
        </div>
        <div className="text-center text-blue-500 pt-12 sm:text-2xl text_sm">
          {about.sixthSlide}
        </div>
        <div className="pt-3 pb-8 text-center sm:text-1x1 text_sm">
          {about.seventhSlide}
        </div>
        <div className="text_sm">
          <div className="flex justify-center my-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-80 h-[45px]  border-solid border-2 border-transparent rounded-none border-b-gray-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-center my-5">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-80 h-[45px]  border-solid border-2 border-transparent rounded-none border-b-gray-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-center my-5">
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              className="w-80 h-[45px]  border-solid border-2 border-transparent rounded-none border-b-gray-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-center my-5">
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="w-80 h-[45px]  border-solid border-2 border-transparent rounded-none border-b-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex justify-center">
            <button className="w-80 h-[45px] my-5  bg-blue-500 text-white rounded-sm">
              Connect with us
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 bg-blue-500 text-white py-10 px-5 sm:px-10 text_sm">
          <div>
            <div className="pb-5">{contact.contact}</div>
            <div>{contact.connect}</div>
          </div>

          <div>
            <div className="py-5 sm:py-0 sm:pb-5">
              <div>{contact.telephone}</div>
              <div>{contact.phoneNumber}</div>
            </div>

            <div>
              <div>{contact.whatsapp}</div>
              <div>{contact.whatsappNumber}</div>
            </div>
          </div>

          <div>
            <div className="py-5 sm:py-0 sm:pb-5">
              <div>{contact.office}</div>
              <div>{contact.officeAddress}</div>
            </div>

            <div>
              <div>{contact.email}</div>
              <div>{contact.emailAddress}</div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
