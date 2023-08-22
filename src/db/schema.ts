import { mysqlTable, varchar, int } from "drizzle-orm/mysql-core";

export const entries = mysqlTable("entries", {
  id: int("id").autoincrement().notNull(),
  userId: varchar("userId", { length: 255 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  secret: varchar("secret", { length: 255 }).notNull(),
});
