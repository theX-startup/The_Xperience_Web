import parse from "html-react-parser";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../../utils/AnimatedPage";

type Props = {
  task: any;
};

const InstructionsPage = (props: Props) => {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <div>
        <div className="container mx-auto">
          {parse(`${props.task[0].task.instructions}`)}
        </div>
        <div className="flex justify-between mt-10 sm:px-5">
          <Button
            color="blue"
            onClick={() => {
              navigate("../info");
            }}
          >
            Previous
          </Button>
          <Button
            color="blue"
            onClick={() => {
              navigate("../submit");
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default InstructionsPage;
