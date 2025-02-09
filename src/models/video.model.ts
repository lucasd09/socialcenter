import { videosTable } from "@/db/schemas/videos.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Video = InferSelectModel<typeof videosTable>;
export type VideoInsert = InferInsertModel<typeof videosTable>;
