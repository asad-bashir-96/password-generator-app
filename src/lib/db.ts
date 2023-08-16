import mysql from "mysql2/promise";

const databaseUrl = process.env.DATABASE_URL || ""; // Provide a default value if env variable is not set
const db = mysql.createPool(databaseUrl);
console.log("Connected to PlanetScale!");

export { db };
