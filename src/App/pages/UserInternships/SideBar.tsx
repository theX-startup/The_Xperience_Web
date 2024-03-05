import { Outlet } from "react-router-dom";

type SideBarProps = {
  setActive: any;
};
const SideBar = (props: SideBarProps) => {
  const { setActive } = props;
  return (
    <div className="min-h-[90vh] w-full relative flex flex-col md:flex-row mt-5 xl:px-[10rem] lg:px-[5rem] md:px-[2rem]">
      <div className="flex sm:text-[12px] text-[10px] mt-5">
        <div
          className="w-full bg-tertiary h-[40px] flex items-center justify-center cursor-pointer md:hidden"
          onClick={() => setActive("inProgress")}
        >
          In Progress
        </div>
        <div
          className="w-full bg-tertiary h-[40px] flex items-center justify-center cursor-pointer md:hidden"
          onClick={() => {
            setActive("finished");
          }}
        >
          Finished Internships
        </div>
        <div
          className="w-full bg-tertiary h-[40px] flex items-center justify-center cursor-pointer md:hidden"
          onClick={() => {
            setActive("all");
          }}
        >
          All internships
        </div>
      </div>
      <div className="w-[30%] h-[90vh] items-center gap-5 px-4 flex-col text-[10px] lg:text-[12px] hidden md:flex">
        <div
          className="w-full bg-tertiary h-[40px] rounded flex items-center justify-center cursor-pointer "
          onClick={() => setActive("inProgress")}
        >
          In Progress
        </div>
        <div
          className="w-full bg-tertiary h-[40px] rounded flex items-center justify-center cursor-pointer"
          onClick={() => {
            setActive("finished");
          }}
        >
          Finished Internships
        </div>
        <div
          className="w-full bg-tertiary h-[40px] rounded flex items-center justify-center cursor-pointer"
          onClick={() => {
            setActive("all");
          }}
        >
          All internships
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SideBar;
