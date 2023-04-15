import { DataSource , DataSourceOptions } from "typeorm";
import { ConfigModule } from "@nestjs/config";
ConfigModule.forRoot()

export const dataSourceOptions :DataSourceOptions = {
    type:'mysql',
    host:process.env.HOST,
    port:3306,
    username:process.env.USERNAME,
    password:process.env.PASSWORD,
    database:process.env.DB_NAME,
    entities: ['dist/**/**/*/*.entity{.js,.ts}'],
    migrations: ['dist/db/migrations/*{.js,.ts}'],
    synchronize: true,
  }

  const datasource = new DataSource(dataSourceOptions)

  export default datasource