import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";

import type { OurFileRouter } from "../services/uploadthing/core";

// export const { UploadButton, UploadDropzone } =
//   generateComponents<OurFileRouter>();

  export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
  export const UploadButton = generateUploadButton<OurFileRouter>();