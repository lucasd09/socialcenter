import { DataTableColumn } from "@/components/data-table/types";
import { Video } from "@/models/video.model";

export const videosDataTableColumns: DataTableColumn<Video>[] = [
  { key: "title" },
  { key: "description" },
  { key: "status" },
];
