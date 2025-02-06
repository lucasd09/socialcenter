import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { id } from "./_utils";

export const usersTable = pgTable("users", {
  id: id(),
  email: text().notNull().unique(),
  name: text().notNull(),
  password: text(),
  googleId: text("google_id"),
  githubId: text("github_id"),
});

export const userId = () =>
  integer("user_id")
    .references(() => usersTable.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull();
