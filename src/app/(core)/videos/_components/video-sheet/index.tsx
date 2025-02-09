"use client";

import { Sheet } from "@/components/sheet";
import { VideoForm } from "../video-form";
import { VideoSheetProps } from "./types";

export const VideoSheet = ({
  isOpen,
  editId,
  onSuccess,
  onOpenChange,
}: VideoSheetProps) => {
  return (
    <Sheet.Root
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <Sheet.Content>
        <Sheet.Title>{editId ? "Edit" : "New"} Category </Sheet.Title>
        <Sheet.Description>
          Enter the category to organize your transactions
        </Sheet.Description>

        <VideoForm
          editVideoId={editId}
          onSuccess={onSuccess}
        />
      </Sheet.Content>
    </Sheet.Root>
  );
};
