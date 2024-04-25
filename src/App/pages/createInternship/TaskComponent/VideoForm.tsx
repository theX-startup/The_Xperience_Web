import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Video } from "lucide-react";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { updateTask } from "../_request";
import { toast } from "react-toastify";
import MuxPlayer from "@mux/mux-player-react";
// import { z } from "zod";

interface props {
  initialData: {
    muxData: any;
    videoUrl: string;
  };
  courseId: any;
  taskId: any;
}

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "130px 10px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function StyledDropzone(props: any) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: { "video/*": [] },
      onDrop: (acceptedFiles) => {
        const cloudName = "dc22hgqku";
        const fb = new FormData();
        const unsignedUploadPreset = "nkvvezjy";
        fb.append("file", acceptedFiles[0]);
        fb.append("upload_preset", unsignedUploadPreset);
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(fb);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            props.onSubmit(response.secure_url);
            props.setIsEditing(false);
          }
        };
      },
    });

  const style: any = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="container">
      <div {...getRootProps({ style })} className="flex gap-y-5">
        <input {...getInputProps()} />
        <Video className="h-10 w-10 text-slate-500" />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}

// const formSchema = z.object({
//   videoUrl: z.string().min(1),
// });

const VideoForm = (props: props) => {
  const { initialData, taskId } = props;
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch<any>();

  const toggleEdit = () => {
    setIsEditing((current) => !current);
  };

  const onSubmit = async (url: string) => {
    await dispatch(updateTask({ videoUrl: url }, toast, taskId));
    toggleEdit();
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Video
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.videoUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Video
            </>
          )}
          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Video
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.videoUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <Video className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <MuxPlayer playbackId={initialData.muxData?.playbackId || ""} />
          </div>
        ))}
      {isEditing && (
        <div>
          <StyledDropzone
            onSubmit={(url: string) => onSubmit(url)}
            setIsEditing={setIsEditing}
          />
        </div>
      )}
      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-2">
          Videos can take a few minutes to process. Refresh the page if the
          video does not appear
        </div>
      )}
    </div>
  );
};

export default VideoForm;
