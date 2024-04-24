import { SubmitTaskSolution } from "./task-submission-popover";

type Props = {
  internshipId: string;
  taskId: string;
  nextTaskId: string;
  isCompleted: boolean;
};

const InternshipProgressButton = ({
  internshipId,
  taskId,
  nextTaskId,
  isCompleted,
}: Props) => {
  return (
    <SubmitTaskSolution
      isCompleted={isCompleted}
      internshipId={internshipId}
      taskId={taskId}
      nextTaskId={nextTaskId}
    />
  );
};

export default InternshipProgressButton;
