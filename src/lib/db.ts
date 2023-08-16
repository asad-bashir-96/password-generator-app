import mysql from "mysql2/promise";

const databaseUrl = process.env.DATABASE_URL || ""; // Provide a default value if env variable is not set
const db = mysql.createPool(databaseUrl);
console.log("Connected to PlanetScale!");
type User = {
  id: number;
  email: string;
  password: string;
};

async function getUsers(): Promise<User | null> {
  try {
    const [rows] = await db.query("select * from users");
    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0] as User;
    }
    return null;
  } catch (e) {
    throw e;
  }
}

export { getUsers };
