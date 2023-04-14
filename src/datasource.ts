import { DataSource } from "typeorm"
import { User } from "../entities/user.entity"
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot()
export const AppDataSource = new DataSource({
    type:'mysql',
    host:process.env.HOST,
    port:3306,
    username:process.env.USERNAME,
    password:process.env.PASSWORD,
    database:process.env.DB_NAME,
    entities: [User],
    migrations: ['src/migration/*{.ts,.js}'],
    synchronize: true,
  })