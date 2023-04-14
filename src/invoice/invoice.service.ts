import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvoiceItem } from 'src/invoice-item/entities/invoice-item.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    @InjectRepository(InvoiceItem)
    private invoicesRepository: Repository<Invoice>,private invoicesItemRepository: Repository<InvoiceItem>
  ) {}
  create(createInvoiceDto: CreateInvoiceDto) {
    
    return 'This action adds a new invoice';
  }

  findAll() {
    return `This action returns all invoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
