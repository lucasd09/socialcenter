import { z } from "zod";

export const imageSchema = z
  .instanceof(File)
  .refine(
    (file) =>
      [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/svg+xml",
        "image/gif",
      ].includes(file.type),
    { message: "Invalid image file type" },
  )
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    message: "File size should be less than 5MB",
  });

export const documentSchema = z
  .instanceof(File)
  .refine(
    (file) =>
      [
        "application/pdf",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type),
    { message: "Invalid document file type" },
  );

export const videoSchema = z
  .instanceof(File)
  .refine(
    (file) =>
      ["video/mp4", "video/webm", "video/ogg", "video/quicktime"].includes(
        file.type,
      ),
    {
      message: "Invalid video file type. Please upload MP4, WebM, OGG, or MOV",
    },
  );
