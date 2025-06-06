import mysql from 'mysql2/promise';
import 'dotenv/config';

export async function getMovies() {
  const connection = await mysql.createConnection({
    host: 'miapp-db.csj8wu0cap2q.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Admin123!',
    database: 'miappdb',
  });

  const [rows] = await connection.execute('SELECT * FROM movies_list');
  await connection.end();
  return rows as { id: number, title: string; description: string }[];
}
