import { Injectable } from '@nestjs/common';
import { CreateInvoiceItemDto } from './dto/create-invoice-item.dto';
import { UpdateInvoiceItemDto } from './dto/update-invoice-item.dto';
import { InvoiceItem } from './entities/invoice-item.entity';
import { InjectConnection, InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from 'src/item/entities/item.entity';

@Injectable()
export class InvoiceItemService {
  constructor(
   // @InjectDataSource() private readonly connection,
  @InjectRepository(InvoiceItem)
  private invoiceItemRepository: Repository<InvoiceItem>,
) {}
  async create(createInvoiceItemDto: InvoiceItem) {
    let invoiceItem= await this.invoiceItemRepository.save(createInvoiceItemDto);
    console.log(invoiceItem)
    return invoiceItem
  }

  findAll() {
    return `This action returns all invoiceItem`;
  }

  async invoiceItems(id:number) {
    return await this.invoiceItemRepository.find({
      where: { invoice: { id: id}},
  });

 
  }
  findOne(id: number) {
    return `This action returns a #${id} invoiceItem`;
  }

  update(id: number, updateInvoiceItemDto: UpdateInvoiceItemDto) {
    return `This action updates a #${id} invoiceItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceItem`;
  }
}
