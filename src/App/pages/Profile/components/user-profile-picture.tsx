import { Button } from "@/components/ui/button";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { updateProfile } from "../_request";

interface props {
  initialData: {
    picturePath: string;
  };
}

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
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
      accept: { "image/*": [] },
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
            const formdata = new FormData()
            const picturePath = response.secure_url;
            formdata.append("picturePath", picturePath);
            props.onSubmit(formdata);
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
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}

const UserProfilePicture = (props: props) => {
  const { initialData } = props;
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch<any>();

  const toggleEdit = () => {
    setIsEditing((current) => !current);
  };

  const onSubmit = async (formdata : any) => {
    await dispatch(updateProfile(formdata));
    toggleEdit();
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Profile Image
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.picturePath && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a Profile Image
            </>
          )}
          {!isEditing && initialData.picturePath && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Image
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.picturePath ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <img
              src={initialData.picturePath}
              alt="upload"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      {isEditing && (
        <div>
          <StyledDropzone
            onSubmit={(url: string) => onSubmit(url)}
            setIsEditing={setIsEditing}
          />
          <div className="text-xs text-muted mt-4">
            16:9 aspect ratio recommended StyledDropzone
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfilePicture;
