import { env } from "./env";
import { createBrowserClient } from "@supabase/ssr";
import { RemoveStorageProps, UploadStorageProps } from "./types";
import { v4 as uuid } from "uuid";

const supabaseStorage = () => {
  return createBrowserClient(env.SUPABASE_STORAGE_URL, env.SUPABASE_ANON_KEY);
};

export const uploadFile = async ({
  file,
  bucket,
  folder,
}: UploadStorageProps) => {
  const fileName = file.name;
  const extension = fileName.slice(fileName.lastIndexOf(".") + 1);
  const path = `${folder ? `${folder}/` : ""}${uuid()}.${extension}`;

  const storage = supabaseStorage().storage;

  const { data, error } = await storage.from(bucket).upload(path, file);

  if (error) {
    return { url: "", error: "Image upload failed" };
  }

  const url = `${env.SUPABASE_STORAGE_URL}/storage/v1/object/public/${bucket}/${data.path}`;

  return { url, error: "" };
};

export const removeFromStorage = async ({
  url,
  bucket,
}: RemoveStorageProps) => {
  const storage = supabaseStorage().storage;

  const path = url.slice(url.lastIndexOf("/") + 1);

  const { error } = await storage.from(bucket).remove([path]);

  if (error) {
    return { success: false };
  }

  return { success: true };
};
