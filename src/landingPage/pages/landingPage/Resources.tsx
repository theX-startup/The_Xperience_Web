import AnimatedPage from "../../../utils/AnimatedPage";
import {
  header,
  datas,
  card,
  image,
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

      <div className="bg-blue-50 grid grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="text_sm text-black mx-5 my-2">Resources</div>
          <div className=" border-solid border-2 border-blue-600"></div>
          <div>
            {card.map((data, index) => {
              return (
                <div
                  key={index}
                  className="text-sm text-black border-solid py-0 lg:py-5 bg-white mt-4 lg:my-2  border-2"
                >
                  <div className=" text-blue-800 text-center text_sm my-2 lg:my-0 ">
                    {data.slide1}
                  </div>
                  <div className="mx-2 text-justify mt-1 lg:mt-5 text_sm">
                    {data.slide2}
                  </div>
                  <div className="flex mx-2 my-0 lg:my-5 pb-1 lg:pb-0">
                    <div className="flex-1 text_sm">{data.time}</div>
                    <div className="text_sm">{data.date}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-7 lg:mt-10">
          <div className=" border-solid border-2 border-blue-600 lg:mr-24"></div>
          {image.map((data, index) => {
            return (
              <div key={index} className=" pb-1 mt-5 lg:pb-1 lg:mt-2">
                <img src={data.img} alt="" />
              </div>
            );
          })}
        </div>

        <div className="text-black text_sm ml-3">
          <div className=" text-black my-2">Related news</div>
          <div className=" border-solid border-2 border-blue-600"></div>
          <div className="my-4 lg:my-7">{detail.career}</div>
          <div className="lg:my-7">{detail.hr}</div>
          <div className="my-4 lg:my-7">{detail.sucess}</div>
          <div className="lg:mt-16">{detail.enhance}</div>
          <div className=" border-solid border-2 border-blue-600 mt-3 mb-8"></div>

          <div className="my-5 text_sm  text-black  py-0 lg:py-5 bg-blue-50 mt-4 lg:my-2 ">
            {details.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex px-5 py-5 my-4 border-blue-600 border-solid border-2"
                >
                  <div className="flex-1 mt-6">{data.product}</div>
                  <div className="mx-2 lg:mx-5">
                    <div className="my-2 flex justify-center">
                      <img src={data.img} alt="" />
                    </div>
                    <div>{data.digital}</div>
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
