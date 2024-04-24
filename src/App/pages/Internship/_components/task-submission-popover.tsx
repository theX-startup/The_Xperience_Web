import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import RestApi from "@/services/RestApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Input } from "@/components/ui/input";

type Props = {
  internshipId: string;
  taskId: string;
  nextTaskId: string;
  isCompleted: boolean;
};
export const SubmitTaskSolution = ({
  isCompleted,
  internshipId,
  nextTaskId,
  taskId,
}: Props) => {
    console.log("isCompleted", isCompleted)
  const [loading, setLoading] = useState(false);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);
  const [fileUploadSuccess, setFileUploadSuccess] = useState(false);
  const [url, setUrl] = useState<string>("");
  const Icon = isCompleted ? XCircle : CheckCircle;
  const Confetti = useConfettiStore();
  const navigate = useNavigate();
  const task = useSelector((state: any) => state.internships.task.task);
  const onClick = async () => {
    setLoading(true);
    const urlPath = `/tasks/complete/${internshipId}/${taskId}`;
    await RestApi.putCall(urlPath, {
      isCompleted: !isCompleted,
      url,
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
    <Popover>
      <PopoverTrigger>
        <Button
          type="button"
          variant={isCompleted ? "outline" : "success"}
          className="w-full md:w-auto"
          //   onClick={onClick}
          disabled={loading}
        >
          {isCompleted ? "Delete Submitted Solution" : "Submit Task Solution"}
          <Icon className="h-4 w-4 ml-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {task?.submissionType === "file" && (
          <div className="flex gap-y-3 flex-col">
            {fileUploadLoading && <p>File Uploading...</p>}
            {fileUploadSuccess && <p>Your File is Ready for Submission</p>}
            {!fileUploadSuccess && !fileUploadLoading && (
              <Input
                type="file"
                accept=".pdf"
                onChange={async (e) => {
                  setFileUploadLoading(true);
                  if (e.target.files && e.target.files[0]) {
                    const cloudName = "dc22hgqku";
                    const fb = new FormData();
                    const unsignedUploadPreset = "nkvvezjy";
                    fb.append("file", e.target.files[0]);
                    fb.append("upload_preset", unsignedUploadPreset);
                    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
                    const xhr = new XMLHttpRequest();
                    xhr.open("POST", url, true);
                    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    xhr.send(fb);
                    xhr.onreadystatechange = function () {
                      if (xhr.readyState === 4 && xhr.status === 200) {
                        const response = JSON.parse(xhr.responseText);
                        setUrl(response.secure_url);
                        setFileUploadLoading(false);
                        setFileUploadSuccess(true);
                      }
                    };
                  }
                }}
              />
            )}
            <Button variant="outline" onClick={onClick}>
              Submit
            </Button>
          </div>
        )}
        {task?.submissionType === "link" && (
          <div className="flex gap-y-3 flex-col">
            {fileUploadLoading && (
              <p className="flex gap-x-3 items-center">
                File Uploading
                <Loader2 className="h-5 w-5 animate-spin text-secondary" />
              </p>
            )}
            {fileUploadSuccess && <p>Your File is Ready for Submission</p>}
            {!fileUploadSuccess && !fileUploadLoading && (
              <Input type="file" accept=".pdf" />
            )}
            <Button disabled={fileUploadLoading} variant="success">
              Submit
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
