import { compa, compan, company } from "@/utils/constant/internshipData";

export default function CompanyForm() {
  return (
    <>
      <div className="text-center sm:text-xl text_sm py-7">
        <div>The fastest and easiest way to have working</div>
        <div>experience</div>
      </div>

      <div className="grid xs:grid-cols-2  sm:grid-cols-3 text_sm">
        <div className="sm:w-96 mx-5 sm:mx-0 sm:my-0 my-3 rounded-lg py-1 border bg-[#7F56D9] text-white text-justify px-3 border-gray-300">
          <div className="flex py-3">
            <div className="px-2 py-2 rounded-lg border bg-[#f4ebff]">
              <img src={compa.img} alt="image" />
            </div>
            <div className="pt-2 pl-2">{compa.firstText}</div>
          </div>
          <div>{compa.secondText}</div>
          <div className="pt-3">{compa.thirdText}</div>
        </div>

        <div className="sm:w-96 mx-5 sm:mx-0 sm:my-0 my-3 rounded-lg py-1 border bg-[#ffffff] text-justify px-3 border-gray-300">
          <div className="flex">
            <div className="px-2 rounded-lg py-1">
              <img src={compan.img} alt="image" />
            </div>
            <div className="pt-5 pl-2">{compan.firstText}</div>
          </div>
          <div className="pt-3">{compan.secondText}</div>
          <div className="pt-3">{compan.thirdText}</div>
        </div>

        <div className="sm:w-96 mx-5 sm:mx-0 sm:my-0 my-3 rounded-lg py-1 border bg-[#ffffff] text-justify px-3 border-gray-300">
          <div className="flex pt-2">
            <div className="px-2 py-2 rounded-lg border bg-[#f4ebff]">
              <img src={company.img} alt="image" />
            </div>
            <div className="pt-2 pl-2">{company.firstText}</div>
          </div>
          <div className="pt-3">{company.secondText}</div>
          <div className="py-3">{company.thirdText}</div>
        </div>
      </div>
    </>
  );
}
