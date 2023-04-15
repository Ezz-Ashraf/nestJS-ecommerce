import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { Invoice } from './entities/invoice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceItem } from 'src/invoice-item/entities/invoice-item.entity';
import { Item } from 'src/item/entities/item.entity';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { InvoiceItemModule } from 'src/invoice-item/invoice-item.module';
import { ItemModule } from 'src/item/item.module';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice ]),UserModule,InvoiceItemModule ,ItemModule],
  exports: [TypeOrmModule ],
  controllers: [InvoiceController],
  providers: [InvoiceService]
})
export class InvoiceModule {}
