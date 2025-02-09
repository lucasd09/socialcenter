"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { Sheet } from "@/components/sheet";
import { useActionMutation } from "@/lib/hooks/use-action-mutation";
import { useActionQuery } from "@/lib/hooks/use-action-query";
import { useZodForm } from "@/lib/hooks/use-zod-form";
import { useEffect } from "react";
import { z } from "zod";
import { getVideoEditData, upsertVideo } from "../../actions";
import { VIDEO_FORM_ID } from "./consts";
import { VideoFormProps } from "./types";

const videoFormSchema = z.object({
  title: z.string().min(2),
});
export type VideoFormSchemaData = z.infer<typeof videoFormSchema>;

export const VideoForm = ({
  editVideoId,
  onSuccess,
}: VideoFormProps) => {
  const form = useZodForm({
    schema: videoFormSchema,
  });

  const { mutate, isPending } = useActionMutation({
    action: upsertVideo,
    onSuccess: onSuccess,
    mutationKey: ["video"],
  });

  const { data: editVideo, isFetching: isFetchingEditVideo } =
    useActionQuery({
      action: () => getVideoEditData(editVideoId as number),
      queryKey: ["video", "edit", editVideoId ?? ""],
      enabled: !!editVideoId,
    });

  useEffect(() => {
    if (!editVideo || !editVideoId) {
      return;
    }

    form.reset(editVideo);
  }, [form, editVideo, editVideoId]);

  return (
    <>
      <Sheet.Body>
        <Form
          id={VIDEO_FORM_ID}
          form={form}
          onSubmit={(data) => mutate(editVideoId, data)}
        >
          <Input
            name="title"
            placeholder="e.g. Groceries"
            form={form}
            isSkeleton={isFetchingEditVideo}
          />
        </Form>
      </Sheet.Body>
      <Sheet.Footer>
        <Sheet.Close asChild>
          <Button
            disabled={isPending}
            variant="secondary"
          >
            Cancel
          </Button>
        </Sheet.Close>
        <Button
          isLoading={isPending}
          form={VIDEO_FORM_ID}
          type="submit"
        >
          Save Video
        </Button>
      </Sheet.Footer>
    </>
  );
};
