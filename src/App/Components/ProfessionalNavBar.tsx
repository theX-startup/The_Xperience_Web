import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import logoBlack from "../../assets/logos/logoBlack.png";
import { useAuth } from "../../redux/context";

const ProfessionalNavBar = () => {
  const user = useSelector((state: any) => state.auth.user);
  const { onLogout } = useAuth();

  return (
    <div className="bg-secondary border-b border-gray-300 dark:border-gray-700">
      <Navbar
        fluid
        rounded
        theme={{
          root: {
            base: "bg-secondary px-2 py-4 sm:px-4",
          },
        }}
      >
        <NavbarBrand href="https://flowbite-react.com">
          <Link to={"/"}>
            <img
              src={logo}
              alt=""
              className="h-[35px] md:h-[40px] lg:h-[45px] hidden dark:block"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={logoBlack}
              alt=""
              className="h-[35px] md:h-[40px] lg:h-[45px] dark:hidden block"
            />
          </Link>
        </NavbarBrand>
        <div className="flex md:order-2 gap-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={user.picturePath}
                className="h-[40px] w-[40px]"
                rounded
              />
            }
          >
            <DropdownHeader className="flex gap-3 items-center">
              <Avatar
                alt="User settings"
                img={user.picturePath}
                className="h-[40px] w-[40px]"
                rounded
              />
              <div>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </div>
            </DropdownHeader>
            <DropdownItem>
              <Link to={"profile"}>Profile</Link>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem
              onClick={() => {
                onLogout();
              }}
            >
              Sign out
            </DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <Navbar.Collapse className="md:hidden">
          <Navbar.Link href="#" active>
            <Link to={"dashboard"}>Dashboard</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to={"analytics"}>Analytics</Link>
          </Navbar.Link>
          <Navbar.Link href="../">
            <Link to={"earnings"}>Earnings</Link>
          </Navbar.Link>
          <Navbar.Link href="#">
            <Link to={"proInternships"}>Internships</Link>
          </Navbar.Link>
          <Navbar.Link href="#">
            <Link to={"orders"}>Orders</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default ProfessionalNavBar;
