import { pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { id } from "./_utils";
import { userId } from "./users.schema";

export const videoStatusEnum = pgEnum("transaction_type", [
  "draft",
  "published",
]);

export const videosTable = pgTable("videos", {
  id: id(),
  userId: userId(),
  title: text().notNull(),
  description: text(),
  status: videoStatusEnum(),
  thumbURL: text(),
  videoURL: text(),
});
