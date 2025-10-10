// db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

console.log("Tentando conectar ao MySQL em:", process.env.MYSQLHOST, process.env.MYSQLPORT);

export const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});