import { ConfirmModel } from "@/components/models/confirm-model";
import { Button } from "@/components/ui/button";
import RestApi from "@/services/RestApi";
import { Trash } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface TaskActionsProps {
  disabled: boolean;
  taskId: string;
  internshipId: string;
  isPublished: boolean;
}
export const TaskActions = ({
  disabled,
  taskId,
  internshipId,
  isPublished,
}: TaskActionsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onDelete = async () => {
    setIsLoading(true);
    try {
      let urlPath = `/tasks/delete/${internshipId}/${taskId}`;
      await RestApi.deleteCall(urlPath).then((res) => {
        setIsLoading(false);
        if (res.message === "Task deleted successfully") {
          toast.success("Task deleted successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          navigate(`../createInternship/step-2/${internshipId}`);
        } else {
          toast.error("Task deletion failed", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      });
    } catch (error) {
      toast.error("Task deletion failed", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  const onPublish = async () => {
    try {
      if (isPublished) {
        let urlPath = `/tasks/unpublish/${internshipId}/${taskId}`;
        await RestApi.putCall(urlPath, {}).then((res) => {
          if (res.message === "Task Unpublished Successfully") {
            toast.success("Task Unpublished Successfully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            window.location.reload();
          } else {
            toast.error("Task Unpublish failed", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        });
      } else {
        let urlPath = `/tasks/publish/${internshipId}/${taskId}`;
        await RestApi.putCall(urlPath, {}).then((res) => {
          if (res.message === "Task Published Successfully") {
            toast.success("Task Published Successfully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            window.location.reload();
          } else {
            toast.error("Task publish failed", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        });
      }
    } catch (error) {
      toast.error("Task publish failed", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onPublish}
        disabled={disabled || isLoading}
        variant={"outline"}
        size={"sm"}
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      <ConfirmModel onConfirm={onDelete}>
        <Button size={"sm"}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModel>
    </div>
  );
};
