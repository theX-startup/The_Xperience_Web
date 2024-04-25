import image1 from "../../assets/images/header1.png";

const Header = () => {
  return (
    <div className="">
      <div className="relative h-[80vh] md:h-[90vh]">
        <div className="h-full ">
          <img src={image1} alt="" className="h-full w-[100%] object-cover " />
        </div>
        <div className="bg-black absolute top-0 w-full h-full opacity-35"></div>
        <div className="sm:p-5 p-2 flex justify-center flex-col items-center gap-7 text-center absolute top-0 h-full w-full">
          <h1 className="md:text-5xl  inknut-antiqua-semibold text-white text-2xl">
            What's Next After Learning a Tech Skill?
          </h1>
          <p className="md:text-xl text-slate-300 md:max-w-[50%]">
            Gain real-world working experience with our internships and
            mentorship programs from top companies and professionals.
          </p>
          <p className="md:text-xl text-slate-300 md:max-w-[50%]">
            No more 845 mails plus begging just to get an internship position
          </p>
        </div>
      </div>
      <div className="mt-14 text-center inknut-antiqua-semibold">
        <h1 className="text-xl md:text-2xl">Trusted and Used By</h1>
      </div>
      <div className="bg-tertiary flex w-[100%] h-[130px] items-center justify-between md:px-10 px-2 flex-wrap lg:px-40 inknut-antiqua-semibold mt-7">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className=" text_md dark:text-[#5200FF] font-sans">2, 437,006</h1>
          <p className="text_sm">Interns</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className=" text_md dark:text-[#5200FF] font-sans">47</h1>
          <p className="text_sm">Companies</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className=" text_md dark:text-[#5200FF] font-sans">105</h1>
          <p className="text_sm">Professionals</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className=" text_md dark:text-[#5200FF] font-sans">10</h1>
          <p className="text_sm">Tech Skills</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
