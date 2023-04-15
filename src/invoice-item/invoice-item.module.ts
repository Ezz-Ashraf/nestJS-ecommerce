import { Module } from '@nestjs/common';
import { InvoiceItemService } from './invoice-item.service';
import { InvoiceItemController } from './invoice-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceItem } from './entities/invoice-item.entity';
import { InvoiceService } from 'src/invoice/invoice.service';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceItem])],
  exports: [TypeOrmModule , InvoiceItemService],
  controllers: [InvoiceItemController],
  providers: [InvoiceItemService]
})
export class InvoiceItemModule {}
