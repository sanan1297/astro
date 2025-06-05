import mysql from 'mysql2/promise';
import 'dotenv/config';

export async function getMovies() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  const [rows] = await connection.execute('SELECT * FROM movies_list');
  await connection.end();
  return rows as { id: number, title: string; description: string }[];
}
