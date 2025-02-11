import { Noop } from "react-hook-form";

export type FilePreviewProps = {
  accept?: string;
  file?: File;
  onClear: Noop;
};
