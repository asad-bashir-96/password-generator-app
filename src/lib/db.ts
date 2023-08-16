const mysql = require("mysql2");
export const db = mysql.createPool(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");
