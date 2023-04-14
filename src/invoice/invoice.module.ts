import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { Invoice } from './entities/invoice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceItem } from 'src/invoice-item/entities/invoice-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice , InvoiceItem])],
  exports: [TypeOrmModule],
  controllers: [InvoiceController],
  providers: [InvoiceService]
})
export class InvoiceModule {}
