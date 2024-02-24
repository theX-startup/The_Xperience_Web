import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../../utils/AnimatedPage";
type Props = {
  task: any;
};

const InfoPage = (props: Props) => {
  const { task } = props;
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <div>
        <div className="text_sm">
          <h1 className="text_md text-[#0000ff]">Background Information :</h1>
          <h1 className="px-5 mt-2">{task[0].background_info}</h1>
        </div>
        <div>
          <h1 className="text_md text-[#0000ff] mt-5">Grading Criteria :</h1>
          {task[0]?.Grading_Criteria?.map((criteria: any, index: any) => {
            return (
              <div key={index} className="mt-5 text_sm">
                <span>{criteria.title}</span>
                <ul className="px-10 mt-5">
                  {criteria?.content?.map((c: any, i: any) => {
                    return (
                      <li key={i} className="list-disc py-1">
                        {c}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-5">
          <h1 className="text_md text-[#0000ff]">What You Will Do</h1>
          <div>
            {task[0]?.what_you_will_do?.map((w: any, i: any) => {
              return (
                <div className="text_sm mt-5" key={i}>
                  <h1>{w.title}</h1>
                  <ul className="px-10 mt-5">
                    {w?.content?.map((c: any, i: any) => {
                      return (
                        <li key={i} className="list-disc py-1">
                          <span>{c}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text_md text-[#0000ff]">What you will learn</h1>
          <ul className="px-10">
            {task[0]?.what_you_will_learn?.map((w: any, i: any) => {
              return (
                <li key={i} className="text_sm mt-5 list-disc">
                  <span>{w}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-end mt-10 sm:px-5">
          <Button
            color="blue"
            onClick={() => {
              navigate("../instruction");
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default InfoPage;
