import { UploadDropzone} from "@/utils/uploadthings";

import { ourFileRouter } from "@/services/uploadthing/core";
// import { toast } from "react-toastify";

interface fileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
  className?: string;
}

export const FileUpload = ({ onChange, endpoint }: fileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(err) => {
        console.error(err);
      }}
    />
  );
};
