'use client'
import { DataTable } from "@/components/data-table";
import { videosDataTableColumns } from "./consts";
import { useActionQuery } from "@/lib/hooks/use-action-query";
import { useQueryClient } from "@tanstack/react-query";
import { getVideoListData, removeVideo, removeVideoBulk } from "./actions";
import { Video } from "@/models/video.model";
import { useState } from "react";
import { VideoSheet } from "./_components/video-sheet";

export default function Page() {
  const queryClient = useQueryClient();
  const isMutating = queryClient.isMutating({
    mutationKey: ["videos"],
    exact: false,
  });

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editVideoId, setEditVideoId] = useState<number>();

  const { data, isLoading, isFetching } = useActionQuery({
    action: getVideoListData,
    queryKey: ["videos", "table"],
  });

  const handleRemove = async ({ id }: Video) => {
    queryClient.setQueriesData(
      {
        queryKey: ["videos", "list"],
      },
      (oldData: Video[] | undefined) => {
        if (!oldData) {
          return oldData;
        }

        return oldData.filter((cateogy) => cateogy.id !== id);
      },
    );

    const result = await removeVideo(id);

    queryClient.invalidateQueries({
      queryKey: ["videos"],
      exact: false,
    });

    return result;
  };

  const handleBulkRemove = async (
    selectedRows: Video[],
  ) => {
    const ids = selectedRows.map((row) => row.id);

    queryClient.setQueriesData(
      {
        queryKey: ["videos", "table"],
      },
      (oldData: Video[] | undefined) => {
        if (!oldData) {
          return oldData;
        }

        return oldData.filter((cateogy) => !ids.includes(cateogy.id));
      },
    );

    const result = await removeVideoBulk(ids);

    queryClient.invalidateQueries({
      queryKey: ["videos"],
      exact: false,
    });

    return result;
  };

  const handleSheetOpenChange = (isOpen: boolean) => {
    setEditVideoId(undefined);
    setIsSheetOpen(isOpen);
  };

  const handleSheetSuccess = async () => {
    queryClient.invalidateQueries({
      queryKey: ["videos"],
      exact: false,
    });

    handleSheetOpenChange(false);
  };

  const handleOpenEditSheet = (id: number) => {
    setEditVideoId(id);
    setIsSheetOpen(true);
  };

  const areButtonsDisabled = !!isMutating || isFetching;

  return <>
    <DataTable
      data={data ?? []}
      create={{
        onClick: () => setIsSheetOpen(true),
      }}
      edit={{
        onClick: ({ id }) => handleOpenEditSheet(id),
      }}
      bulkRemove={{
        action: handleBulkRemove,
        mutationKey: ["videos"],
      }}
      remove={{
        action: handleRemove,
        mutationKey: ["videos"],
      }}
      columns={videosDataTableColumns}
      isLoading={isLoading}
      areButtonsDisabled={areButtonsDisabled}
      entityName="Video"
      entityNamePlural="Videos"
    />
    <VideoSheet
      isOpen={isSheetOpen}
      editId={editVideoId}
      onSuccess={handleSheetSuccess}
      onOpenChange={handleSheetOpenChange}
    />
  </>
}