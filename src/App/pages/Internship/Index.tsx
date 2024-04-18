import Loader from "@/App/Components/Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTask } from "./_request";
import RestApi from "@/services/RestApi";
import { Banner } from "@/components/banner";
import { VideoPlayer } from "./_components/video-player";
import InternshipEnrollButton from "./_components/Internship-enroll-button";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";
import { File } from "lucide-react";

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
  const internship = useSelector((state: any) => state.internships.internship);

  const { taskId, internshipId } = useParams();

  const purchase = async () => {
    const urlPath = `/purchase/get/${internshipId}`;
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
            <h1 className="text-2xl font-semibold mb-2">{task?.task?.title}</h1>
            {Purchase ? (
              // TODO : Add Task Progress Component
              <></>
            ) : (
              <InternshipEnrollButton
                internshipId={internshipId || ""}
                price={internship?.price}
              />
            )}
          </div>
          <Separator />
          <div>
            <Preview value={task?.task?.instructions} />
          </div>
          {!!task?.task?.resources?.lenght && (
            <>
              <Separator />
              <div className="p-4">
                {task?.task?.resources.map((resource: any, index: number) => (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                  >
                    <File />
                    <p className="line-clamp-1">{resource.name}</p>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
