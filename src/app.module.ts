import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/entities/user.entity';
import { ItemModule } from './item/item.module';
import { UserModule } from './user/user.module';
import { InvoiceModule } from './invoice/invoice.module';
import { dataSourceOptions } from 'db/data-source';
import { InvoiceItemModule } from './invoice-item/invoice-item.module';

@Module({
  imports: [ConfigModule.forRoot() , TypeOrmModule.forRoot(dataSourceOptions), ItemModule, UserModule, InvoiceModule, InvoiceItemModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
