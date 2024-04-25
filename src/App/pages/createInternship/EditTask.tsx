import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTask } from "./_request";
import {
  ArrowLeft,
  BadgeInfo,
  Eye,
  FilePen,
  LayoutDashboard,
  Video,
} from "lucide-react";
import { IconBadge } from "@/components/icon-badge";
import TaskTitleForm from "./TaskComponent/TitleForm";
import TaskDescriptionForm from "./TaskComponent/DescriptionForm";
import AccessForm from "./TaskComponent/AccessForm";
import VideoForm from "./TaskComponent/VideoForm";
import Grading_Criteria from "./TaskComponent/GradingCriteria";
import WhatYouWillDo from "./TaskComponent/WhatYouWillDo";
import WhatYouWillLearn from "./TaskComponent/WhatYouWillLearn";
import { Banner } from "@/components/banner";
import { TaskActions } from "./TaskComponent/TaskAction";
import MinimumScoreForm from "./TaskComponent/MinimumScoreForm";
import CategoryForm from "./TaskComponent/CategoryForm";

type Props = {};

const EditTask = (props: Props) => {
  const {} = props;
  const params = useParams();
  const { id, internshipId } = params;
  const dispatch = useDispatch<any>();
  const task = useSelector((state: any) => state.tasks.task);
  const required = [
    task?.title,
    task?.what_you_will_do?.length > 0,
    task?.what_you_will_learn?.length > 0,
    task?.Grading_Criteria?.length > 0,
    task?.instructions,
    task?.videoUrl,
  ];
  const totalFields = required.length;
  const completedFields = required.filter(Boolean).length;

  const isComplete = required.every(Boolean);
  useEffect(() => {
    dispatch(getTask(internshipId ? internshipId : "", id ? id : ""));
  }, []);
  return (
    <>
      {!task.isPublished && (
        <Banner
          variant={"warning"}
          label="This task is unpublished, it will not be visible in the internship"
        />
      )}
      <Banner
        variant={"warning"}
        label="If changes do not reflect refresh the page"
      />
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
              <TaskActions
                disabled={!isComplete}
                taskId={id || ""}
                internshipId={internshipId || ""}
                isPublished={task?.isPublished}
              />
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
              <WhatYouWillDo initialData={task} taskId={id} />
              <WhatYouWillLearn initialData={task} taskId={id} />
              <TaskDescriptionForm
                taskId={id}
                initialData={task}
                courseId={internshipId}
              />
              <Grading_Criteria initialData={task} taskId={id} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Video} />
              <h1 className="text-xl">Add a video</h1>
            </div>
            <VideoForm initialData={task} courseId={internshipId} taskId={id} />
            <div className="mt-5">
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
            <div className="mt-5">
              <div className="flex items-center gap-x-2">
                <IconBadge icon={BadgeInfo} />
                <h2 className="text-xl">Set a minimum score for this task</h2>
              </div>
              <MinimumScoreForm initialData={task} taskId={task._id} />
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-x-2">
                <IconBadge icon={FilePen} />
                <h2 className="text-xl">Set submission type</h2>
              </div>
              <CategoryForm
                initialData={task}
                taskId={task._id}
                options={[
                  { value: "link", label: "Link" },
                  { value: "file", label: "File" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;
