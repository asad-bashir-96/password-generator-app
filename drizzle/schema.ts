import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const entries = mysqlTable("entries", {
	id: int("id").autoincrement().notNull(),
	userId: varchar("userId", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	secret: varchar("secret", { length: 255 }).notNull(),
},
(table) => {
	return {
		entriesId: primaryKey(table.id)
	}
});