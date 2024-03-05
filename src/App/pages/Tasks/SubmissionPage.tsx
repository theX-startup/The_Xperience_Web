import { MdOutlineConstruction } from "react-icons/md";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../../utils/AnimatedPage";

// type Props = {};

const SubmissionPage = () => {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <div className="flex items-center justify-center w-full h-[90vh]">
        <div className="flex gap-5 items-center justify-center">
          <div className="animate-spin">
            <MdOutlineConstruction size={25} />
          </div>
          <h1 className="text_sm">This Page is under construction</h1>
        </div>
      </div>
      <div className="flex justify-between mt-10 sm:px-5">
        <Button
          color="blue"
          onClick={() => {
            navigate("../instruction");
          }}
        >
          Previous
        </Button>
        <Button
          disabled
          color="blue"
          //   onClick={() => {
          //     navigate("../submit");
          //   }}
        >
          Next
        </Button>
      </div>
    </AnimatedPage>
  );
};

export default SubmissionPage;
