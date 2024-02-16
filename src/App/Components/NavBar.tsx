import { Dropdown, Input, Menu, MenuButton, MenuItem } from "@mui/base";
import { CiMenuFries } from "react-icons/ci";
import { useSelector } from "react-redux";

const NavBar = () => {
  const categories = useSelector((state: any) => state.internships.categories);
  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };
  return (
    <div className="relative">
      <div className="h-[70px] w-full shadow shadow-black dark:shadow-white flex items-center justify-between px-5 ">
        <Input
          placeholder="Search"
          type="search"
          slotProps={{
            input: {
              className:
                "h-[40px] w-full min-w-[200px] md:w-[400px] rounded-md p-3 text-secondary text_sm grow",
            },
          }}
        />
        <div className="md:hidden">
          <Dropdown>
            <MenuButton>
              <CiMenuFries className="text-3xl" />
            </MenuButton>
            <Menu
              slotProps={{
                listbox: {
                  className:
                    " bg-tertiary border w-[200px] me-5 cursor-pointer transition-all duration-300 ease-in-out",
                },
              }}
            >
              <MenuItem
                onClick={createHandleMenuClick("Home")}
                slotProps={{
                  root: {
                    className: "p-4 hover:bg-[#0000ff] hover:text-white",
                  },
                }}
              >
                Home
              </MenuItem>
              <MenuItem
                onClick={createHandleMenuClick("Profile")}
                slotProps={{
                  root: {
                    className: "p-4 hover:bg-[#0000ff] hover:text-white",
                  },
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={createHandleMenuClick("Settings")}
                slotProps={{
                  root: {
                    className: "p-4 hover:bg-[#0000ff] hover:text-white",
                  },
                }}
              >
                Settings
              </MenuItem>
              <MenuItem
                onClick={createHandleMenuClick("Logout")}
                slotProps={{
                  root: {
                    className: "p-4 hover:bg-[#0000ff] hover:text-white",
                  },
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Dropdown>
        </div>
      </div>
      <div className="h-[70px] text-[10px] " style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        overflowX: "auto",
        gap: "20px",
      }}>
        {categories.map((category: string) => (
          <div key={category} className="p-3 bg-tertiary rounded-full cursor-pointer flex min-w-[150px] items-center justify-center">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
