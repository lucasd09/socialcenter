import { Button } from "@/components/button";
import { FilePreviewProps } from "./types";
import { Icon } from "@/components/icon";
import { X } from "lucide-react";

export const FilePreview = ({ accept, file, onClear }: FilePreviewProps) => {
  if (!file) {
    return
  }

  const preview = URL.createObjectURL(file)

  return <div className="relative mb-2">
    {accept?.startsWith("video")
      ? <video src={preview} className="w-full max-h-64 object-contain bg-muted rounded-md" controls />
      : <img src={preview} alt={accept} className="w-full max-h-[184px] object-contain rounded-md bg-slate-100" />
    }
    <Button variant="ghost" size="icon" className="absolute -top-7 right-0" onClick={onClear}>
      <Icon src={X} className="size-4" />
    </Button>
  </div>
}