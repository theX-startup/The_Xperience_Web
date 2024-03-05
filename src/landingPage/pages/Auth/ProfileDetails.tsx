import React, { useRef, useState } from "react";
import { skills } from "../../../utils/constant/Skills";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "./_request";
import { useNavigate } from "react-router-dom";
import { FileInput, Label } from "flowbite-react";

const ProfileDetails = () => {
  //   const user = useSelector((state: any) => state.auth.user);
  const fileRef = useRef<HTMLInputElement>(null);
  const cloudName = "dc22hgqku";
  const [profilePic, setProfilePic] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const [showSkills, setShowSkills] = useState(false);
  const [skillsValue, setSkillsValue] = useState("");
  const signupLoading = useSelector((state: any) => state.auth.signUpLoading);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch<any>();

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
        }
      };
    }
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    const picturePath = profilePic;
    formData.append("picturePath", picturePath);
    formData.append("skills", JSON.stringify(selectedSkills));
    const YOE = to !== "" ? (Number(to) - Number(from)).toString() : "";
    formData.append("YOE", YOE);
    formData.append("description", description);
    dispatch(updateProfile(formData, navigation));
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="lg:px-[10rem] md:px-[5rem] px-[2rem] py-10 text_sm"
    >
      {profilePic === "" ? (
        <div className="flex w-full items-center justify-center">
          <Label
            htmlFor="dropzone-file"
            className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <FileInput
              id="dropzone-file"
              className="hidden"
              onChange={(e) => handleFileChange(e)}
            />
          </Label>
        </div>
      ) : (
        <div
          className="flex px-4 rounded-sm items-center justify-start text_sm cursor-pointer"
          onClick={() => {
            fileRef.current?.click();
            console.log("clicked", fileRef.current);
          }}
        >
          <input
            type="file"
            ref={fileRef}
            className="hidden"
            // onChange={(e: any) => handleFileChange(e)}
            accept="image/*"
          />
          <img
            src={profilePic}
            alt=""
            className="w-[200px] h-[200px] rounded-full"
          />
        </div>
      )}
      <div className="mt-10">
        <span className="text_md">
          Profile Description <span className="text-red-600">*</span>
        </span>
        <div className="rounded-lg">
          <textarea
            name=""
            id=""
            className="w-full bg-transparent rounded-lg outline-none p-3 mt-3 min-h-[200px] border-gray-300 dark:border-gray-600 text_sm"
            placeholder="Write a brief description about your company or professional skills"
            style={{ resize: "none" }}
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          ></textarea>
        </div>
      </div>
      <div className="mt-10">
        <span className="text_md">
          Years of experience <span className="text-red-600">*</span>
        </span>
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
              className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
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
              className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              To
            </label>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <span className="text_md">
          Skills <span className="text-red-600">*</span>
        </span>
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
      <button
        className={`w-[150px] md:w-[200px] mt-10 h-[45px] bg-[#0000ff] text-white rounded-sm mb-5 flex items-center justify-center gap-5 ${
          signupLoading ? "bg-opacity-40" : ""
        }`}
        style={{
          cursor: signupLoading ? "not-allowed" : "pointer",
        }}
      >
        Continue
        {signupLoading && <div className="h-5 w-5 bg-white animate-spin"></div>}
      </button>
    </form>
  );
};

export default ProfileDetails;
