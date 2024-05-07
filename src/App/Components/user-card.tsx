import { cn } from "@/lib/utils";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { guestRoutes, professionalRoutes } from "./sidebar-routes";

type Props = {
  mobileView: boolean;
};

const UserCard = ({ mobileView }: Props) => {
  const user = useSelector((state: any) => state.auth.user);
  const initials = user?.fullname
    ?.split(" ")
    .map((n: string) => n[0])
    .join("");

  const pathname = useLocation().pathname;

  const isProfessionalPage = pathname?.includes("/professional");
  const routes = isProfessionalPage ? professionalRoutes : guestRoutes;
  return (
    <div>
      <div className={cn("h-24", mobileView && "bg-sky-100/20")}>
        <div className="flex w-full items-center h-full justify-center gap-x-3">
          <button className="h-[60px] w-[60px]" type="button">
            {user?.picturePath ? (
              <img
                src={user.picturePath}
                alt="user"
                className="h-full w-[80%] rounded-sm"
              />
            ) : (
              <div className="h-full w-full rounded-sm bg-black flex items-center justify-center">
                <h1 className="text-white text-lg font-medium">{initials}</h1>
              </div>
            )}
          </button>
          <div>
            <Link
              to={`/professional/profile/${user?._id}/internships`}
              className={cn(mobileView && "flex items-center gap-x-2")}
            >
              <h1 className="text-lg font-medium hover:text-sky-500 transition-all">
                {user?.fullname}
              </h1>
              {mobileView && (
                <MdOutlineArrowForwardIos
                  size={16}
                  className="text-slate-500"
                />
              )}
            </Link>
            <p className="text-sm text-slate-500">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="border-b py-4 transition-all hover:text-sky-600 hover:bg-slate-300/20">
        <Link
          to={`${isProfessionalPage ? "../" : "/professional/internships"}`}
          className="text-slate-500 text-sm font-[500] pl-6  "
        >
          {isProfessionalPage
            ? "Switch to Intern Mode"
            : "Switch to Professional Mode"}
        </Link>
      </div>
      {!isProfessionalPage && !mobileView && (
        <div className="w-full border-b">
          {routes.map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className="flex items-center gap-x-3 py-4 px-6 hover:bg-slate-300/20 transition-all"
            >
              <h1 className="text-sm font-medium text-slate-500">{route.label}</h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserCard;
