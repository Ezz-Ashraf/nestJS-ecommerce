import { DataSource } from "typeorm"
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { Invoice } from "./invoice/entities/invoice.entity";
import { InvoiceItem } from "./invoice-item/entities/invoice-item.entity";
import { Item } from "./item/entities/item.entity";

ConfigModule.forRoot()
export const AppDataSource = new DataSource({
    type:'mysql',
    host:process.env.HOST,
    port:3306,
    username:process.env.USERNAME,
    password:process.env.PASSWORD,
    database:process.env.DB_NAME,
    entities: [User,Invoice,InvoiceItem,Item],
    migrations: ['src/migration/*{.ts,.js}'],
    synchronize: true,
  })