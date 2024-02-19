import { useSelector } from "react-redux";

const SubMenu = () => {
  const categories = useSelector((state: any) => state.internships.categories);
  return (
    <div className="px-5 xl:px-[10rem] lg:px-[5rem]">
      <div
        className="flex gap-2 overflow-x-scroll overflow-y-hidden scroll"
      >
        {categories.map((category: any, index: any) => {
          return (
            <div key={index} className="text-center hover:text-[#0000ff] transition-all duration-300 ">
              <p className="font-semibold cursor-pointer text-nowrap text-[10px] md:text-[12px] p-2 ">
                {category}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
