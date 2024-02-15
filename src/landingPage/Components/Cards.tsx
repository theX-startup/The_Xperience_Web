import { cards } from "../../utils/constant/internshipData";

const Cards = () => {
  return (
    <div>
      <div className="p-5 text-center">
        <h1 className="text_sm">
          Both Interns, Companies And Professionals Are Happy With Us. You Think
          Its a Lie? Evidence Dey !!!
        </h1>
      </div>
      <div
        className=" gap-2 sm:gap-4 px-5 w-[100%] items-center justify-center flex flex-wrap h-[300px] overflow-x-hidden"
        style={{
          scrollbarWidth: "none",
        }}
      >
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className="w-[270px] bg-tertiary p-2 sm:p-4 text-center rounded-sm"
            >
              <h1 className="text-[10px]">" {card.message} "</h1>
              <h1 className="text-[12px] dark:text-[#5200FF] text-left mt-4">
                {card.fullName}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
