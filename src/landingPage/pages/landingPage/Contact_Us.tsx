import { contactdata } from "@/utils/constant/internshipData";
import ContactForm from "./ContactForm/ContactForm";
// import slide10 from "../../../assets/images/slide10.png";
// import slide11 from "../../../assets/images/slide11.png";

const Contact_Us = () => {
  return (
    <div className="bg-[#fbfbfb]">
      <div className="text-center my-5">
        <div className="font-bold lg:text-lg text_sm pt-10 pb-3">
          Contact Us
        </div>
        <div className="text-xs">
          Any question or remarks? Just write us a message!
        </div>
      </div>

      <div className="bg-white border py-2 px-3 grid grid-cols-1 lg:grid-cols-[40%_60%]">
        <div className="bg-black text_sm border rounded-lg py-3 px-10 text_sm">
          <div className="text-white py-3">Contact Information</div>
          <div className="text-gray-400 pb-10">
            Say something ; we are always available{" "}
          </div>

          <div>
            {contactdata.map((data, index) => {
              return (
                <div key={index} className="text-white flex text-justify py-5">
                  <div className="lg:text-2xl pr-5 text_sm">{data.img}</div>
                  <div>{data.number}</div>
                </div>
              );
            })}
          </div>
          <div></div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact_Us;
