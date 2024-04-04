import { blog, bloger } from "@/utils/constant/internshipData";

export default function Blog() {
  return (
    <>
      <div className="py-10 px-5 sm:px-0">Our recent blogs</div>
      <div className="grid sm:grid-cols-[50%_50%]">
        <div className="mx-5 sm:mx-0">
          {blog.map((data, index) => {
            return (
              <div key={index} className="grid sm:grid-cols-[60%_40%] py-3">
                <div >
                  <img src={data.img} alt="image" />
                </div>
                <div className="text_sm pr-5 pt-5 sm:pt-0">
                  <div className="text-[#6941C6]">{data.firstText}</div>
                  <div className="py-2 font-semibold">{data.secondText}</div>
                  <div>{data.thirdText}</div>
                  <div className="flex py-2">
                    <div className="pr-2 text-[#C11574]">{data.fourthText}</div>
                    <div className="border px-3 bg-gray-300 rounded-lg">{data.fifthText}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-5 sm:mx-0">
          <div className="pt-4">
            <img src={bloger.img} alt="image" className="w-auto" />
          </div>
          <div className="text_sm pt-10">
            <div className="text-[#6941C6]">{bloger.firstText}</div>
            <div className="py-2 font-semibold">{bloger.secondText}</div>
            <div>{bloger.thirdText}</div>
            <div className="flex py-2">
              <div className="pr-2">{bloger.fourthText}</div>
              <div  className="border px-2 bg-gray-300 rounded-lg">{bloger.fifthText}</div>
              <div className="text-[#C11574] pl-2">{bloger.sixthText}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
