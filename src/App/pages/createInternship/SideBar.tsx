import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "flowbite-react";

const Side = () => {
  return (
    <div
      className="flex min-h-[80vh]
    "
    >
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
              <Link to={""}>
                <Sidebar.Item>Create Internships</Sidebar.Item>
              </Link>
              <Link to={""}>
                <Sidebar.Item>Create Resourses</Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <Outlet />
    </div>
  );
};

export default Side;
