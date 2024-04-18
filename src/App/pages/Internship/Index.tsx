import Loader from "@/App/Components/Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTask } from "./_request";
import RestApi from "@/services/RestApi";
import { Banner } from "@/components/banner";
import { VideoPlayer } from "./_components/video-player";

interface task {
  task: any;
  muxInfo: any;
  nextTask: any;
  userProgressInfo: any;
}
export const InternshipIdPage = () => {
  const task: task = useSelector((state: any) => state.internships.task);
  const [Purchase, setPurchase] = useState(null);
  const taskLoading = useSelector(
    (state: any) => state.internships.taskLoading
  );
  const dispatch = useDispatch<any>();

  const { taskId, internshipId } = useParams();

  const purchase = async () => {
    const urlPath = "/purchase/get";
    const res = await RestApi.getCall(urlPath);
    setPurchase(res);
  };

  useEffect(() => {
    purchase();
  }, []);

  useEffect(() => {
    dispatch(getTask(taskId || "", internshipId || ""));
  }, []);
  if (taskLoading) {
    return <Loader />;
  }

  const isLocked = !task?.task?.isFree && !Purchase;
  const completeOnEnd = !!Purchase && !task?.userProgressInfo?.isCompleted;

  return (
    <div>
      {task?.userProgressInfo?.isCompleted && (
        <Banner label="You already completed this task" variant={"success"} />
      )}
      {isLocked && (
        <Banner
          label="You need to purchase this internship to access this chapter"
          variant={"warning"}
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            taskId={taskId || ""}
            title={task?.task?.title}
            internshipId={internshipId || ""}
            nextInternshipId={task?.nextTask?._id}
            playbackId={task?.muxInfo?.playbackId}
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
        <div>
          <div className="p-4 flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl font-semibold mb-2">
              {task?.task?.title}
            </h1>
            {}
          </div>
        </div>
      </div>
    </div>
  );
};
