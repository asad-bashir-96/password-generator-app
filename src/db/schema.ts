import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  varchar,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const entries = mysqlTable("entries", {
  id: varchar("id", { length: 255 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  secret: varchar("secret", { length: 255 }).notNull(),
});
