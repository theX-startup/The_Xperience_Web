import Loader from "@/App/Components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTask } from "./_request";
import { Banner } from "@/components/banner";
import { VideoPlayer } from "./_components/video-player";
import InternshipEnrollButton from "./_components/Internship-enroll-button";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";
import { File } from "lucide-react";
import InternshipProgressButton from "./_components/Internship-progress-button";

interface task {
  task: any;
  muxInfo: any;
  nextTask: any;
  userProgressInfo: any;
}
export const InternshipIdPage = () => {
  const task: task = useSelector((state: any) => state.internships.task);

  const taskLoading = useSelector(
    (state: any) => state.internships.taskLoading
  );
  const dispatch = useDispatch<any>();
  const internship = useSelector((state: any) => state.internships.internship);
  const Purchase = internship?.purchased;

  const { taskId, internshipId } = useParams();

  useEffect(() => {
    dispatch(getTask(taskId || "", internshipId || ""));
  }, []);
  if (taskLoading) {
    return <Loader />;
  }

  const isLocked = !task?.task?.isFree && !Purchase;
  // const completeOnEnd = !!Purchase && !task?.userProgressInfo?.isCompleted;

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
            title={task?.task?.title}
            playbackId={task?.muxInfo?.playbackId}
            isLocked={isLocked}
          />
        </div>
        <div>
          <div className="p-4 flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl font-semibold mb-2">
              {task?.task?.title} ({task?.task?.minimumScore} marks)
            </h1>
            {Purchase ? (
              <InternshipProgressButton
                internshipId={internshipId || ""}
                taskId={taskId || ""}
                nextTaskId={task?.nextTask?._id}
                isCompleted={task?.userProgressInfo?.isCompleted}
              />
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
                    key={index}
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
