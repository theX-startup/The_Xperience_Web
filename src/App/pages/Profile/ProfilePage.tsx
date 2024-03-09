import { Button, Tabs } from "flowbite-react";
import { IoLocation } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { HiUserCircle } from "react-icons/hi";
import { MdWorkspacesFilled } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { useRef, useState } from "react";
import { skills } from "../../../utils/constant/Skills";
import { updateProfile } from "../../../landingPage/pages/Auth/_request";
import { IoCamera } from "react-icons/io5";
import { IoCameraReverse } from "react-icons/io5";

const ProfilePage = () => {
  const [profilePic, setProfilePic] = useState("");
  const user = useSelector((state: any) => state.auth.user);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const cloudName = "dc22hgqku";
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const [showSkills, setShowSkills] = useState(false);
  const [skillsValue, setSkillsValue] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");
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

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("skills", JSON.stringify(selectedSkills));
    const YOE = to !== "" ? (Number(to) - Number(from)).toString() : "";
    formData.append("YOE", YOE);
    formData.append("description", description);
    dispatch(updateProfile(formData, ""));
  };

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    setSkillsValue(inputValue);
    setShowSkills(true);
    const filtered = skills.filter((skill) =>
      skill.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSkills(filtered);
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
          <div className="mt-5">
            <h1 className="text-[#0000ff]">Update Profile Infomation</h1>
            <div className="mt-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Profile Description
              </label>
              <textarea
                id="message"
                value={description}
                className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-0 focus:border-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white h-[200px] resize-none"
                placeholder="Enter description"
                onChange={(e) => setDescription(e.currentTarget.value)}
              ></textarea>
              <Button
                color="dark"
                size={"lg"}
                className="mt-5"
                onClick={() => handleSubmit()}
              >
                Save
              </Button>
            </div>
            <div>
              <div className="mt-5">
                <span className="text_sm">Years of experience</span>
                <div className="flex gap-10 items-center mt-5 flex-col md:flex-row">
                  <div className="relative w-full md:w-[20%]">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-sans"
                      placeholder=" "
                      value={from}
                      onChange={(e) => {
                        setFrom(e.currentTarget.value);
                      }}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      From
                    </label>
                  </div>
                  <div className="relative w-full md:w-[20%]">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-sans"
                      placeholder=" "
                      value={to}
                      onChange={(e) => setTo(e.currentTarget.value)}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      To
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <span className="text_sm">Skills</span>
                <div className="w-full mt-5">
                  <div className="flex flex-wrap mb-5">
                    {selectedSkills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-tertiary rounded-full p-2 inline-block mr-2"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-[45px] border flex rounded-lg border-gray-300 dark:border-gray-600">
                    <input
                      type="text"
                      className="w-full text_sm bg-transparent outline-none border-0 px-4 rounded-lg focus:ring-0 focus:border-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-900"
                      placeholder="Search for skills"
                      value={skillsValue}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                    <div
                      className=" h-full flex items-center cursor-pointer px-2"
                      onClick={() => {
                        setSkillsValue("");
                        if (selectedSkills.includes(skillsValue)) return;
                        setSelectedSkills([...selectedSkills, skillsValue]);
                      }}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                {showSkills && (
                  <div className="w-full h-[300px] bg-tertiary overflow-y-scroll mt-2">
                    {filteredSkills.map((skill) => (
                      <div
                        key={skill}
                        className="p-2 hover:bg-opacity-85 cursor-pointer"
                        onClick={() => {
                          setSkillsValue(skill);
                          setShowSkills(false);
                        }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <Button
              color="dark"
              size={"lg"}
              className="mt-5"
              onClick={() => handleSubmit()}
            >
              Save
            </Button>
          </div>
        </Tabs.Item>
        <Tabs.Item title={"Internships"} icon={MdWorkspacesFilled}></Tabs.Item>
        <Tabs.Item title={"Reviews"} icon={MdRateReview}></Tabs.Item>
        <Tabs.Item title={"Transactions"} icon={GrTransaction}></Tabs.Item>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
