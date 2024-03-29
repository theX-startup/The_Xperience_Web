import { useState } from "react";
import AnimatedPage from "../../../utils/AnimatedPage";
import Input from "../../Components/Input";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { checkUsername, register } from "./_request";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const userNameCheck = useSelector(
    (state: any) => state.auth.userNameCheck.message
  );
  const signupLoading = useSelector((state: any) => state.auth.signUpLoading);
  const [formValues, setFormValues] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    profilePic: "",
    position: "intern",
  });
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userNameCheck === "Username is available") {
      dispatch(register(formValues, navigate));
    } else {
      alert("Username is not available");
    }
  };
  return (
    <AnimatedPage>
      <div className="min-h-screen flex items-center w-full">
        <form
          className="max-h-[80vh] lg:max-h-[90vh] w-full justify-center overflow-y-auto items-center px-3 md:px-10 gap-4 grid grid-cols-1 pt-12 lg:pt-24"
          style={{
            scrollbarWidth: "none",
          }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full h-[45px] dark:bg-white dark:border-transparent dark:text-black flex rounded-sm">
            <Input
              type="text"
              name="username"
              onChange={(e: any) => handleInputChange(e)}
              value={formValues.username}
              class={`w-full text_sm`}
              placeholder="Username"
              onFocusOut={() => {
                dispatch(checkUsername(formValues.username));
              }}
            />
            <div className=" h-full flex items-center  dark:bg-white px-2 rounded-sm">
              {userNameCheck === "" ? (
                <FaUser />
              ) : userNameCheck === "Username is available" ? (
                <FaUser style={{ color: "green" }} />
              ) : (
                <FaUser style={{ color: "red" }} />
              )}
            </div>
          </div>
          <div className="w-full h-[45px] dark:bg-white dark:border-transparent dark:text-black flex rounded-sm">
            <Input
              type="email"
              name="email"
              onChange={(e: any) => handleInputChange(e)}
              value={formValues.email}
              class={`w-full text_sm`}
              placeholder="Email"
            />
            <div className=" h-full flex items-center dark:bg-white px-2 rounded-sm">
              <MdEmail />
            </div>
          </div>
          <div className="w-full h-[45px] dark:bg-white dark:border-transparent dark:text-black flex rounded-sm">
            <Input
              type="password"
              name="password"
              onChange={(e: any) => handleInputChange(e)}
              value={formValues.password}
              class={`w-full text_sm`}
              placeholder="*************"
            />
            <div className=" h-full flex items-center dark:bg-white px-2 rounded-sm">
              <FaLock />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-10 gap-5 w-full">
            <h1 className="text_sm">Who are you</h1>
            <div className="flex w-full justify-between items-center flex-col gap-5 md:flex-row">
              <div
                className="w-[250px] h-[45px] border flex items-center justify-center cursor-pointer rounded-sm text_sm border-black dark:border-white"
                onClick={() => {
                  setFormValues({
                    ...formValues,
                    position: "intern",
                  });
                }}
              >
                An Intern
              </div>
              <div
                className="w-[250px] h-[45px] border flex items-center justify-center cursor-pointer border-black dark:border-white rounded-sm text_sm"
                onClick={() => {
                  setFormValues({
                    ...formValues,
                    position: "pro",
                  });
                }}
              >
                A Company/Professional
              </div>
            </div>
          </div>

          {formValues.position === "intern" && (
            <div className="w-full h-[45px] dark:bg-white dark:border-transparent dark:text-black flex rounded-sm mt-3">
              <Input
                type="text"
                name="fullname"
                onChange={(e: any) => handleInputChange(e)}
                value={formValues.fullname}
                class={`w-full text_sm`}
                placeholder="Full Name"
              />
              <div className=" h-full flex items-center dark:bg-white px-2 rounded-sm">
                <FaUser />
              </div>
            </div>
          )}

          {formValues.position === "pro" && (
            <div className="grid gap-5 mt-3">
              <div className="w-full h-[45px] dark:bg-white dark:border-transparent dark:text-black flex rounded-sm">
                <Input
                  type="text"
                  name="fullname"
                  onChange={(e: any) => handleInputChange(e)}
                  value={formValues.fullname}
                  class={`w-full text_sm`}
                  placeholder="Company Name/Professional Name"
                />
                <div className=" h-full flex items-center dark:bg-white px-2 rounded-sm">
                  <FaUser />
                </div>
              </div>
            </div>
          )}
          <button
            className={`w-full h-[45px] bg-[#0000ff] text-white rounded-sm mb-5 flex items-center justify-center gap-5 ${
              signupLoading ? "bg-opacity-40" : ""
            }`}
            style={{
              cursor: signupLoading ? "not-allowed" : "pointer",
            }}
          >
            Create Account
            {signupLoading && (
              <div className="h-5 w-5 bg-white animate-spin"></div>
            )}
          </button>
          <div className="flex w-full justify-center items-center gap-3 mb-5">
            <p className="text_sm">Already have an account?</p>
            <Link to="../login" className="text_sm text-[#0000ff]">
              Login
            </Link>
          </div>
        </form>
      </div>
    </AnimatedPage>
  );
};

export default Register;
