import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTask } from "./_request";
import { ArrowLeft, Eye, LayoutDashboard, Video } from "lucide-react";
import { IconBadge } from "@/components/icon-badge";
import TaskTitleForm from "./TaskComponent/TitleForm";
import TaskDescriptionForm from "./TaskComponent/DescriptionForm";
import AccessForm from "./TaskComponent/AccessForm";
import VideoForm from "./TaskComponent/VideoForm";

type Props = {};

const EditTask = (props: Props) => {
  const {} = props;
  const params = useParams();
  const { id, internshipId } = params;
  const dispatch = useDispatch<any>();
  const task = useSelector((state: any) => state.tasks.task);
  const required = [
    task?.title,
    task?.attachments?.lenght > 0,
    task?.what_you_will_do?.lenght > 0,
    task?.what_you_will_learn?.lenght > 0,
    task?.Grading_Criteria?.lenght > 0,
    task?.instructions,
  ];
  const totalFields = required.length;
  const completedFields = required.filter(Boolean).length;
  useEffect(() => {
    dispatch(getTask(id ? id : ""));
  }, []);
  return (
    <div className="min-h-screen p-6">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <Link
            to={`../createInternship/step-2/${internshipId}`}
            className="flex items-center text-sm hover:opacity-75 transition mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to internship setup
          </Link>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl font-medium">Task Creation</h1>
              <span className="text-sm text-slate-700">
                Complete all fields {completedFields}/{totalFields}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your task</h2>
            </div>
            <TaskTitleForm
              taskId={id}
              initialData={task}
              courseId={internshipId}
            />
            <TaskDescriptionForm
              taskId={id}
              initialData={task}
              courseId={internshipId}
            />
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Eye} />
              <h2 className="text-xl">Access Settings</h2>
            </div>
            <AccessForm
              taskId={id}
              initialData={task}
              courseId={internshipId}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={Video} />
            <h1 className="text-xl">Add a video</h1>
          </div>
          <VideoForm initialData={task} courseId={internshipId} taskId={id} />
        </div>
      </div>
    </div>
  );
};

export default EditTask;
