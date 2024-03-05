import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import logoBlack from "../../assets/logos/logoBlack.png";

const ProfileNav = () => {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <Navbar fluid rounded>
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
      <div className="flex md:order-2">
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
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse></NavbarCollapse>
    </Navbar>
  );
};

export default ProfileNav;
