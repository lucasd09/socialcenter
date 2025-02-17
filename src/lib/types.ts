import { RadixIcon } from "@/components/icon/types";
import { LucideIcon } from "lucide-react";

export type OmitMerge<T, K extends object> = Omit<T, keyof K> & K;

export type SetState<T> = (value: T | ((oldValue: T) => T)) => void;

export type Nullable<T> = { [key in keyof T]: T[key] | null };

export type ActionSuccessResult<T> = {
  success: true;
  data: T;
  message?: string;
};
export type ActionErrorResult = {
  success: false;
  error: unknown;
};
export type ActionResult<T = undefined> =
  | ActionSuccessResult<T>
  | ActionErrorResult;

export type RouteIcon = LucideIcon | RadixIcon;
export type Route = {
  name: string;
  path: string;
  icon: RouteIcon;
};

export type BaseSheetProps = {
  isOpen: boolean;
  editId?: number;
  onSuccess: () => void;
  onOpenChange: (isOpen: boolean) => void;
};

export type UploadStorageProps = {
  file: File;
  bucket: string;
  folder?: string;
  path?: string;
};

export type RemoveStorageProps = {
  bucket: string;
  url: string;
};
