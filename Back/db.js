// db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const connection = await mysql.createConnection({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQL_DATABASE,
});