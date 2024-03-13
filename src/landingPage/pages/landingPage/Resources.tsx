import AnimatedPage from "../../../utils/AnimatedPage";
import {
  header,
  datas,
  card,
  detail,
  details,
} from "../../../utils/constant/internshipData";

const Resources = () => {
  return (
    <AnimatedPage>
      <div className="p-2 text-center text_sm">
        <h1 className=" my-3">{header.firstText}</h1>
        <h1 className="text_sm mb-5">{header.secondText}</h1>
      </div>
      <div className="bg-blue-50">
        <div className="grid grid-cols-2 lg:grid-cols-4 pt-6">
          {datas.map((data, index) => {
            return (
              <div
                key={index}
                className="border-blue-600 border-solid py-2 lg:py-5 bg-white mx-3 my-2 text-center border-2"
              >
                <div className="flex justify-center my-4">
                  <img src={data.img} alt="" />
                </div>
                <div className="text-black text_sm">{data.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-blue-50 grid lg:grid-cols-[60%_33%] gap-20 w-full">
        <div>
          <div>
            <div className="text_sm text-black my-2 mx-5">Resources</div>
            <div className=" border-solid border-2 border-blue-600"></div>
            <div className="lg:grid-cols-[60%_40%] gap-12 w-full">
              <div className="flex flex-col gap-5 p-5">
                {card.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex w-full text-black  text_sm flex-col md:flex-row min-h-[200px] border bg-white rounded-md"
                    >
                      <div className=" w-full">
                        <div className="text-blue-800 text-center text_sm my-4">
                          {data.slide1}
                        </div>
                        <div className="mx-3 text-justify">{data.slide2}</div>
                        <div className="flex mt-5 px-3 mb-5">
                          <div className="flex-1 text_sm ">{data.time}</div>
                          <div className="text_sm">{data.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <img
                          src={data.img}
                          alt=""
                          className="h-[95%] md:w-[95%] md:rounded-md rounded-b-md"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="text-black text_sm ml-2">
          <div className=" text-black py-2">Related news</div>
          <div className=" border-solid border-2 border-blue-600"></div>
          <div className="py-4">{detail.career}</div>
          <div className="py-2">{detail.hr}</div>
          <div className="py-3">{detail.sucess}</div>
          <div className="pt-5 pb-2">{detail.enhance}</div>
          <div className=" border-solid border-2 border-blue-600 mb-5"></div>

          <div className="text-black  py-0 lg:py-5 bg-blue-50 ">
            {details.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex mr-2 px-3 my-5 border-blue-600 border-solid border-2"
                >
                  <div className="flex-1 py-7">{data.product}</div>
                  <div className="">
                    <div className="flex justify-center">
                      <img src={data.img} alt="" className="py-2" />
                    </div>
                    <div className="py-2">{data.digital}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Resources;
