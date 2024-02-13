import image1 from "../../assets/images/header1.png";

const Header = () => {
  return (
    <div className="">
      <div>
        <img src={image1} alt="" className="vh-100  object-cover " />
      </div>
      <div className="sm:p-5 p-2 flex justify-center flex-col items-center gap-7 text-center ">
        <h1 className="lg:text-[40px] md:text-[30px] text-[20px] inknut-antiqua-semibold">What's Next After Learning a Tech Skill?</h1>
        <p className="lg:text-lg text-sm">
          Gain real-world working experience with our internships and mentorship
          programs from top companies and professionals.
        </p>
        <p className="lg:text-lg text-sm">No more 845 mails plus begging just to get an internship position</p>
        <div className="bg-tertiary w-40 py-3 flex items-center justify-center rounded cursor-pointer">Create Account</div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Header;
