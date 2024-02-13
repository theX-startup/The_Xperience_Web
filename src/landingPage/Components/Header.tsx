import image1 from "../../assets/images/header1.png";

const Header = () => {
  return (
    <div className="">
      <div>
        <img src={image1} alt="" className="h-[60vh] md:h-[75vh] w-[100%] object-cover " />
      </div>
      <div className="sm:p-5 p-2 flex justify-center flex-col items-center gap-7 text-center ">
        <h1 className="text_lg inknut-antiqua-semibold">
          What's Next After Learning a Tech Skill?
        </h1>
        <p className="text_sm">
          Gain real-world working experience with our internships and mentorship
          programs from top companies and professionals.
        </p>
        <p className="text_sm">
          No more 845 mails plus begging just to get an internship position
        </p>
        <div className="bg-tertiary w-40 py-3 flex items-center justify-center rounded cursor-pointer">
          Create Account
        </div>
      </div>
      <div className="mt-14 text-center inknut-antiqua-semibold">
        <h1 className="text_sm">Trusted and Used By</h1>
      </div>
      <div className="bg-tertiary flex w-[100%] h-[130px] items-center justify-between md:px-10 px-2 flex-wrap lg:px-40 inknut-antiqua-semibold mt-7">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className=" text_md text-[#5200FF]">
            2, 437,006
          </h1>
          <p className="text_sm">
            Interns
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className=" text_md text-[#5200FF]">
            2, 437,006
          </h1>
          <p className="text_sm">
            Interns
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className=" text_md text-[#5200FF]">
            2, 437,006
          </h1>
          <p className="text_sm">
            Interns
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className=" text_md text-[#5200FF]">
            2, 437,006
          </h1>
          <p className="text_sm">
            Interns
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
