import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

// create the connection
const connection = connect({
  host: process.env.HOST,
  username: process.env.NAME,
  password: process.env.PASSWORD,
});

export const db = drizzle(connection);
