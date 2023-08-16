import mysql from "mysql2/promise";
const databaseUrl = process.env.DATABASE_URL || ""; 
const db = mysql.createPool(databaseUrl);


