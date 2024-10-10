import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '\\src\\**\\*.entity{.ts,.js}'], // Ajusta esta ruta si es necesario
  migrations: [__dirname + '\\src\\migrations\\*{.ts,.js}'],
  synchronize: false, // Desactivar synchronize para producción
  logging: true,
});
