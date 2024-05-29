import UserButton from "@/App/Components/user-button";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { SearchInput } from "./search-input";
import Logo from "@/App/Components/logo";
import { cn } from "@/lib/utils";

const NavbarRoutes = () => {
  const pathname = useLocation().pathname;

  const isProfessionalPage = pathname.startsWith("/professional");
  const isPlayerPage = pathname?.includes("/details");

  const isDashboard = pathname === "/";
  return (
    <>
      {
        <div className="flex w-full gap-x-5 items-center justify-end md:w-[70%] md:justify-start">
          <div className={cn(
            isProfessionalPage && "block md:hidden",
            isPlayerPage && "hidden"
          )}>
            <Logo />
          </div>
          {isDashboard && (
            <div className="hidden md:block w-full">
              <SearchInput />
            </div>
          )}
        </div>
      }
      <div className={cn(
        "gap-x-2 ml-auto items-center hidden md:flex ",
        isPlayerPage && "flex"
      )}>
        {isProfessionalPage || isPlayerPage ? (
          <Link to={"../"}>
            <Button
              size={"sm"}
              variant={"ghost"}
              title="Switch back to intern mode"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : (
          <Link to={"/professional/internships"}>
            <Button size={"sm"} variant={"ghost"}>
              Professional Mode
            </Button>
          </Link>
        )}
        <UserButton />
      </div>
    </>
  );
};

export default NavbarRoutes;
