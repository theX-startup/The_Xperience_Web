import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import RestApi from "@/services/RestApi";
import { CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const Icon = isCompleted ? XCircle : CheckCircle;
  const [loading, setLoading] = useState(false);
  const Confetti = useConfettiStore();
  const navigate = useNavigate();
  const onClick = async () => {
    setLoading(true);
    const urlPath = `/tasks/complete/${internshipId}/${taskId}`;
    await RestApi.putCall(urlPath, {
      isCompleted: !isCompleted,
    });

    if (!isCompleted && !nextTaskId) {
      Confetti.onOpen();
    }

    if (!isCompleted && nextTaskId) {
      navigate(`../../internship/${internshipId}/task/${nextTaskId}`);
    }

    toast.success("Task Project Updated");
  };
  return (
    <Button
      type="button"
      variant={isCompleted ? "outline" : "success"}
      className="w-full md:w-auto"
      onClick={onClick}
    >
      {isCompleted ? "Not Completed" : "Mark as Complete"}
      <Icon className="h-4 w-4 ml-2" />
    </Button>
  );
};

export default InternshipProgressButton;
