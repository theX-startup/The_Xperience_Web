import React, { useRef, useState } from "react";
import { skills } from "../../../utils/constant/Skills";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "./_request";
import { useNavigate } from "react-router-dom";

const ProfileDetails = () => {
  //   const user = useSelector((state: any) => state.auth.user);
  const fileRef = useRef<HTMLInputElement>(null);
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
      const file = e.target.files[0];
     setProfilePic(URL.createObjectURL(file));
      
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
    // const picturePath = profilePic;
    // formData.append("picturePath", picturePath);
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
      className="lg:px-[10rem] md:px-[5rem] px-[2rem] py-10"
    >
      {profilePic === "" ? (
        <div
          onClick={() => {
            fileRef.current?.click();
            console.log("clicked", fileRef.current);
          }}
          className="w-full h-[45px] bg-tertiary rounded-lg flex px-4 items-center justify-center text_sm cursor-pointer"
        >
          <input
            type="file"
            ref={fileRef}
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(e)}
            accept="image/*"
          />
          Upload Company/Professional Logo
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
        <span>
          Profile Description <span className="text-red-600">*</span>
        </span>
        <div className="rounded-lg">
          <textarea
            name=""
            id=""
            className="w-full bg-tertiary rounded-lg outline-none p-3 mt-3 text-[12px] min-h-[200px]"
            placeholder="Write a brief description about your company or professional skills"
            style={{ resize: "none" }}
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          ></textarea>
        </div>
      </div>
      <div className="mt-10">
        <span>
          Years of experience <span className="text-red-600">*</span>
        </span>
        <div className="flex gap-10 items-center mt-5">
          <div className="flex items-center gap-5 bg-tertiary h-[50px] p-2 rounded-md">
            <span className="text-[12px]">From</span>
            <input
              type="text"
              className="h-full bg-transparent outline-none font-sans"
              value={from}
              onChange={(e) => setFrom(e.currentTarget.value)}
            />
          </div>
          <div className="flex items-center gap-5 bg-tertiary h-[50px] p-2 rounded-md">
            <span className="text-[12px]">To</span>
            <input
              name="to"
            //   type="text"
              className="h-full bg-transparent outline-none font-sans"
              value={to}
              onChange={(e) => setTo(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <span>
          Skills <span className="text-red-600">*</span>
        </span>
        <div className="w-full mt-5">
          <div className="flex flex-wrap mb-5">
            {selectedSkills.map((skill) => (
              <div
                key={skill}
                className="bg-tertiary text-[12px] rounded-full p-2 inline-block mr-2"
              >
                {skill}
              </div>
            ))}
          </div>
          <div className="w-full h-[45px] bg-tertiary flex px-4 rounded-lg">
            <input
              type="text"
              className="w-full text_sm bg-transparent outline-none"
              placeholder="Search for skills"
              value={skillsValue}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <div
              className=" h-full flex items-center bg-tertiary cursor-pointer"
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
        className={`w-[30%] mt-10 h-[45px] bg-[#0000ff] text-white rounded-sm mb-5 flex items-center justify-center gap-5 ${
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
