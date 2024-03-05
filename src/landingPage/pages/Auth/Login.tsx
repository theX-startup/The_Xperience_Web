import { useState } from "react";
// import img from "../../../assets/images/loginImg.png";
import AnimatedPage from "../../../utils/AnimatedPage";
import Input from "../../Components/Input";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./_request";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(login(formValues, navigation));
  };

  return (
    <AnimatedPage>
      <div className="min-h-[85vh] w-full flex items-center">
        <form
          onSubmit={(e: any) => handleSubmit(e)}
          className="flex w-full flex-col justify-center items-center px-3 md:px-10 gap-4"
        >
          <div className="w-full h-[45px] dark:bg-white dark:border-transparent dark:text-black flex rounded-sm">
            <Input
              type="text"
              name="email"
              onChange={(e: any) => handleInputChange(e)}
              value={formValues.email}
              class={`w-full text_sm`}
              placeholder="Email or Username"
            />
            <div className=" h-full flex items-center dark:bg-white rounded-sm px-2">
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
            <div className=" h-full flex items-center dark:bg-white rounded-sm px-2">
              <FaLock />
            </div>
          </div>

          <button className="w-full h-[45px] bg-[#0000ff] text-white rounded-sm">
            Login
          </button>

          <div className="w-full flex justify-between">
            <div className="text-tertiary text_sm">Forgot Password?</div>
            <Link
              to={"../register"}
              relative={"route"}
              className="text-tertiary text_sm"
            >
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </AnimatedPage>
  );
};

export default Login;
