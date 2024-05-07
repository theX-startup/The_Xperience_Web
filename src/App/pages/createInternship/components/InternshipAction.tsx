import { ConfirmModel } from "@/components/models/confirm-model";
import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import RestApi from "@/services/RestApi";
import { Trash } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface InternshipActionProps {
  disabled: boolean;
  internshipId: string;
  isPublished: boolean;
}
export const InternshipAction = ({
  disabled,
  internshipId,
  isPublished,
}: InternshipActionProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const confetti = useConfettiStore();
  const navigate = useNavigate();
  const onDelete = async () => {
    setIsLoading(true);
    try {
      let urlPath = `/internships/delete/${internshipId}`;
      await RestApi.deleteCall(urlPath).then(() => {
        setIsLoading(false);

        toast.success("Internship deleted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate(`../professional/internships`);
      });
    } catch (error) {
      toast.error("Internship deletion failed", {
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
        let urlPath = `/internships/unpublish/${internshipId}`;
        await RestApi.putCall(urlPath, {}).then((res) => {
          if (res.message === "success") {
            toast.success("Internship UnPublished Successfully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            window.location.reload();
          } else {
            toast.error("Internship Unpublish failed", {
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
        let urlPath = `/internships/publish/${internshipId}`;
        await RestApi.putCall(urlPath, {}).then((res) => {
          if (res.message === "Internship Published Successfully") {
            toast.success("Internship Published Successfully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            confetti.onOpen();
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          } else {
            toast.error("Internship publish failed", {
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
      toast.error("Internship publish failed", {
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
