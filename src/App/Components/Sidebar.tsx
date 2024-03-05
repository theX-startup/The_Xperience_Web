import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { useSelector } from "react-redux";

const SidebarNav = () => {
  const user = useSelector((state: any) => state.auth.user);

  if (user.position === "intern") {
    return <Outlet />;
  }
  return (
    <div className="flex w-full min-h-[90vh]">
      <div className="hidden md:block border-r border-gray-300 dark:border-gray-700">
        <Sidebar
          aria-label="Default sidebar example"
          theme={{
            root: {
              inner: "bg-secondary p-2 pt-5",
            },
          }}
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Link to={"dashboard"}>
                <Sidebar.Item>Dashboard</Sidebar.Item>
              </Link>
              <Link to={"/analytics"}>
                <Sidebar.Item>Analytics</Sidebar.Item>
              </Link>
              <Link to={"/earnings"}>
                <Sidebar.Item>Earnings</Sidebar.Item>
              </Link>
              <Link to={"/proInternships"}>
                <Sidebar.Item>Internships</Sidebar.Item>
              </Link>
              <Link to={"/orders"}>
                <Sidebar.Item>Orders</Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="p-5 flex-1  overflow-x-scroll relative" style={{
        scrollbarWidth: "none",
      }}>
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarNav;
