import { user } from "@/redux/models";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

type Props = {
  user: user;
};

const ProfileCard = ({ user }: Props) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="mt-10 lg:w-[60%] p-5">
      <h1 className="text-2xl font-semibold">Professional</h1>
      <div className="mt-5">
        <Link to={""} className="underline text-sky-500 text-lg font-medium">
          {user?.fullname}
        </Link>
        <div className="mt-3">
          {user?.skills?.map((skill: string) => (
            <span
              key={skill}
              className="text-sm bg-sky-200/25 rounded-md p-2 mr-1"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex ">
          <div>
            {user?.picturePath && (
              <img
                src={user?.picturePath}
                alt=""
                className="w-[150px] h-[150px] rounded-full mt-5 bg-contain"
              />
            )}
            {!user?.picturePath && (
              <div className="w-[150px] h-[150px] bg-sky-200/25">
                {user?.fullname[0] + user?.fullname[1]}
              </div>
            )}
          </div>
          <div>
            {/* User Info e . g rating, reviews count, no of student, no of course */}
          </div>
        </div>
        <pre
          className={`lg:max-w-full whitespace-pre-wrap text-sm text-justify mt-5 transition-all poppins-regular ${
            seeMore ? "h-auto" : "max-h-[300px]"
          } overflow-hidden`}
        >
          {user?.description}
        </pre>

        <button
          onClick={() => setSeeMore(!seeMore)}
          className="text-sky-500 font-medium mt-2 flex gap-x-2 items-center"
        >
          {seeMore ? "See Less" : "See More"}
          {seeMore ? (
            <IoIosArrowUp className="inline" />
          ) : (
            <IoIosArrowDown className="inline" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
