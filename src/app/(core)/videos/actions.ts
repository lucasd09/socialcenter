"use server";

import { checkUser } from "@/lib/session";
import { ActionResult } from "@/lib/types";
import { Video, VideoInsert } from "@/models/video.model";
import { videoService } from "@/services/video";
import { VideoFormSchemaData } from "./_components/video-form";
import { removeFromStorage, uploadFile } from "@/lib/storage";

export const getVideoListData = async (): Promise<ActionResult<Video[]>> => {
  try {
    const data = await videoService.getListData();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const upsertVideo = async (
  id: number | undefined,
  data: VideoFormSchemaData,
): Promise<ActionResult<Video>> => {
  try {
    const user = await checkUser();

    const { url: thumbURL } = await uploadFile({
      bucket: "thumbs",
      file: data.thumb,
    });

    const { url: videoURL } = await uploadFile({
      bucket: "videos",
      file: data.video,
    });

    const videoInsert: VideoInsert = {
      userId: user.id,
      title: data.title,
      description: data.description,
      status: "draft",
      thumbURL,
      videoURL,
    };

    const video = id
      ? await videoService.update(id, videoInsert)
      : await videoService.create(videoInsert);

    return {
      success: true,
      data: video,
      message: `Video ${id ? "updated" : "created"}`,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const getVideoEditData = async (
  id: number,
): Promise<ActionResult<VideoFormSchemaData>> => {
  try {
    const video = await videoService.getById(id);

    return {
      success: true,
      data: video,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const removeVideo = async (id: number): Promise<ActionResult> => {
  try {
    const data = await videoService.delete(id);

    if (data.thumbURL) {
      await removeFromStorage({ bucket: "thumbs", url: data.thumbURL });
    }

    if (data.videoURL) {
      await removeFromStorage({ bucket: "videos", url: data.videoURL });
    }

    return {
      success: true,
      data: undefined,
      message: "Video removed",
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const removeVideoBulk = async (ids: number[]): Promise<ActionResult> => {
  try {
    await videoService.deleteBulk(ids);

    const message =
      ids.length > 1 ? `${ids.length} videos removed` : "video removed";

    return {
      success: true,
      data: undefined,
      message,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};
