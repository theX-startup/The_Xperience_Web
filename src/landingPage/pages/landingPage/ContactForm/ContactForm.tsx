import { Label, Radio, Textarea, Button } from "flowbite-react";
import slide9 from "../../../../assets/images/slide9.png";

export default function ContactForm() {
  return (
    <div className="lg:px-7 text_sm pt-7">
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2">
        <div className="pr-5">
          <div>First Name</div>
          <input
            type="text"
            name="firstName"
            placeholder=""
            className="w-full lg:w-60 h-[30px]  border-solid border-2 border-transparent rounded-none border-b-gray-500 focus:outline-none"
          />
        </div>

        <div className="pt-5 sm:pt-0 lg:pt-0">
          <div>Last Name</div>
          <input
            type="text"
            name="lastName"
            placeholder=""
            className="w-full lg:w-60 h-[30px]  border-solid border-2 border-transparent rounded-none border-b-gray-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 sm:pt-7 pt-5">
        <div className="pr-5">
          <div>Email</div>
          <input
            type="text"
            name="email"
            placeholder=""
            className="w-full lg:w-60 h-[30px]  border-solid border-2 border-transparent rounded-none border-b-gray-500 focus:outline-none"
          />
        </div>

        <div className="pt-5 sm:pt-0 lg:pt-0">
          <div>phone Number</div>
          <input
            type="number"
            name="number"
            placeholder=""
            className="w-full lg:w-60 h-[30px]  border-solid border-2 border-transparent rounded-none border-b-gray-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="pt-5">
        <fieldset className="flex justify-around gap-2">
          <legend className="pb-1">Select Subject?</legend>
          <div className="flex items-center gap-1">
            <Radio
              id="united-state"
              name="countries"
              value="USA"
              defaultChecked
            />
            <Label htmlFor="united-state" className="text_sm">
              General Inquiry
            </Label>
          </div>
          <div className="flex items-center gap-1">
            <Radio id="germany" name="countries" value="Germany" />
            <Label htmlFor="germany" className="text_sm">
              General Inquiry
            </Label>
          </div>
          <div className="flex items-center gap-1">
            <Radio id="spain" name="countries" value="Spain" />
            <Label htmlFor="spain" className="text_sm">
              General Inquiry
            </Label>
          </div>
          <div className="flex items-center gap-1">
            <Radio id="uk" name="countries" value="United Kingdom" />
            <Label htmlFor="uk" className="text_sm">
              General Inquiry
            </Label>
          </div>
        </fieldset>
      </div>

      <div className="w-auto pt-10">
        <Textarea
          id="comment"
          placeholder="Write your message"
          required
          rows={2}
          className="bg-white border-solid border-2 border-transparent rounded-none border-b-gray-500 focus:outline-none"
        />
      </div>
      <div className="pt-7 flex justify-end ">
        <Button className="bg-[#000000] rounded-none text_sm">
          Send Message
        </Button>
      </div>
      <div className="flex justify-end px-10 mt-[-30px]">
        <img src={slide9} alt="image" />
      </div>
    </div>
  );
}
