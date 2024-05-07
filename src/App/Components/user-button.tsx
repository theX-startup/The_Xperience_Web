import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "@/redux/context";
import UserCard from "./user-card";

const UserButton = () => {
  const user = useSelector((state: any) => state.auth.user);
  const [active, setActive] = useState(false);
  const { onLogout } = useAuth();

  const initials = user?.fullname
    ?.split(" ")
    .map((n: string) => n[0])
    .join("");

  return (
    <div
      className="relative "
      onMouseOver={() => setActive(true)}
      onClick={() => setActive(!active)}
    >
      <button className="h-[40px] w-[40px]" type="button">
        {user?.picturePath ? (
          <img
            src={user.picturePath}
            alt="user"
            className="h-full w-full rounded-sm"
          />
        ) : (
          <div className="h-full w-full rounded-sm bg-black flex items-center justify-center">
            <h1 className="text-white text-lg font-medium">{initials}</h1>
          </div>
        )}
      </button>
      {active && (
        <div
          className="absolute top-12 right-0 w-80 border z-50 bg-white "
          onMouseLeave={() => setActive(false)}
        >
          <UserCard mobileView={false} />
          <div
            className="border-b py-4 transition-all hover:text-sky-600 hover:bg-slate-300/20 cursor-pointer"
            onClick={() => onLogout()}
          >
            <span className="text-slate-500 text-sm font-[500] pl-6  ">
              Logout
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserButton;
