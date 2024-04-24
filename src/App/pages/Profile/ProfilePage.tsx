import { Tabs } from "flowbite-react";
import { IoLocation } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { HiUserCircle } from "react-icons/hi";
import { MdWorkspacesFilled } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { useRef, useState } from "react";

import { updateProfile } from "../../../landingPage/pages/Auth/_request";
import { IoCamera } from "react-icons/io5";
import { IoCameraReverse } from "react-icons/io5";

const ProfilePage = () => {
  const [profilePic, setProfilePic] = useState("");
  const user = useSelector((state: any) => state.auth.user);

  const cloudName = "dc22hgqku";

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<any>();
  const initials = user?.fullname
    ?.split(" ")
    .map((n: string) => n[0])
    .join("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fb = new FormData();
      const unsignedUploadPreset = "nkvvezjy";
      fb.append("file", e.target.files[0]);
      fb.append("upload_preset", unsignedUploadPreset);
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(fb);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          console.log(response);
          setProfilePic(response.secure_url);
          const formData = new FormData();
          const picturePath = profilePic;
          formData.append("picturePath", picturePath);
          dispatch(updateProfile(formData, ""));
        }
      };
    }
  };

  return (
    <div className="min-h-[80vh] px-2 xl:px-[10rem] lg:px-[5rem]">
      <div className="md:p-5 flex md:gap-5 gap-2 items-center text_sm">
        <div className="rounded-md relative">
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <div
            className="absolute -right-1 -bottom-1 p-1 bg-secondary rounded-full border border-[#0000ff] flex items-center justify-center cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            {user.picturePath || profilePic ? (
              <IoCameraReverse size={15} color="black" />
            ) : (
              <IoCamera size={15} color="black" />
            )}
          </div>
          {user.picturePath || profilePic ? (
            <img
              src={profilePic ? profilePic : user.picturePath}
              alt=""
              className="rounded-md w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
            />
          ) : (
            <div className="w-[100px] bg-black h-[100px] rounded-md text-white justify-center items-center flex md:w-[150px] md:h-[150px]">
              <h1 className="uppercase text_md">{initials}</h1>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <h1 className="uppercase">{user.fullname}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <h1>{user.email}</h1>
          <div className="flex items-center gap-1">
            <IoLocation size={20} />
            <h1>{user.country}</h1>
          </div>
        </div>
      </div>
      <Tabs
        className="bg-secondary outline-none focus:outline-none"
        aria-label="Tabs with underline"
        style="underline"
        theme={{
          base: "flex flex-col gap-2",
          tablist: {
            base: "flex text-center",
            styles: {
              default:
                "flex-wrap border-b border-gray-200 dark:border-gray-700",
              underline:
                "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
              pills:
                "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
              fullWidth:
                "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
            },
            tabitem: {
              base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 ",
              styles: {
                default: {
                  base: "rounded-t-lg",
                  active: {
                    on: "bg-gray-100 text-[#0000ff] dark:bg-gray-800 dark:text-cyan-500",
                    off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
                  },
                },
                underline: {
                  base: "rounded-t-lg text-[10px] md:text-[12px] lg:text-[14px]",
                  active: {
                    on: "text-[#0000ff] rounded-t-lg border-b-2 border-[#0000ff] active dark:text-cyan-500 dark:border-cyan-500",
                    off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
                  },
                },
              },
              icon: "mr-2 h-5 w-5",
            },
          },
        }}
      >
        {user.description && (
          <Tabs.Item title={"Profile"} icon={HiUserCircle}>
            <div className="">
              <h1 className="text-[#0000ff]">Profile Description</h1>
              <div className="mt-5">
                {user.description && (
                  <div>
                    <pre className="md:max-w-[80%] whitespace-pre-wrap text-justify">
                      {user.description}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </Tabs.Item>
        )}
        <Tabs.Item title={"Internships"} icon={MdWorkspacesFilled}></Tabs.Item>
        <Tabs.Item title={"Reviews"} icon={MdRateReview}></Tabs.Item>
        <Tabs.Item title={"Transactions"} icon={GrTransaction}></Tabs.Item>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
