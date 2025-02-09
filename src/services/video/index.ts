import { videosTable } from "@/db/schemas/videos.schema";
import { Video, VideoInsert } from "@/models/video.model";
import { createService } from "../_base";
import { checkUser } from "@/lib/session";
import { db } from "@/db";
import { eq } from "drizzle-orm";

const baseService = createService<Video, VideoInsert>(videosTable);

export const videoService = {
  ...baseService,
  getListData: async (): Promise<Video[]> => {
    const user = await checkUser();

    const data = await db
      .select()
      .from(videosTable)
      .where(eq(videosTable.userId, user.id));

    return data;
  },
};
