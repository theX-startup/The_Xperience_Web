import cardImg from "../../assets/images/cardimg.png";

const Card = () => {
  return (
    <div className="bg-tertiary grid grid-cols-1 py-5  md:grid-cols-2 px-5">
      <div className="flex flex-col items-center justify-center text-center gap-2 inknut-antiqua-semibold">
        <h1 className="text-[20px]">
          We Are Bridging The Gap Between Learning And Doing
        </h1>
        <h1 className="text-[15px] inknut-antiqua-regular">
          In a world that demands action, we've pioneered a platform that
          seamlessly connects the worlds of learning and doing. The Xperience is
          more than a bridge;
        </h1>
        <h1 className="text-[15px] inknut-antiqua-regular">
          it's a dynamic space where theoretical knowledge transforms into
          real-world impact.
        </h1>
        <h1 className="text-[15px] inknut-antiqua-regular">
          Here, innovation is not just a concept; it's an experience.
        </h1>
        <div className="btn cursor-pointer mt-5 text-secondary ">Get Started</div>
      </div>
      <div className="flex items-center justify-center">
        <img src={cardImg} alt="" />
      </div>
    </div>
  );
};

export default Card;
