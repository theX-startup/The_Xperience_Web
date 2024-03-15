import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarNav = () => {
  const user = useSelector((state: any) => state.auth.user);

  if (user.position === "intern") {
    return <Outlet />;
  }
  return (
    <div className="flex w-full min-h-[90vh] ">
      <div
        className="p-5 flex-1  overflow-x-scroll relative"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarNav;
