import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot() , TypeOrmModule.forRoot({
    type:'mysql',
    host:process.env.HOST,
    port:3306,
    username:process.env.USERNAME,
    password:process.env.PASSWORD,
    database:process.env.DB_NAME,
    entities: [],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
