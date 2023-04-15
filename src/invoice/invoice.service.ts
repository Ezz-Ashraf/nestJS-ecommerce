import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';
import { UserService } from 'src/user/user.service';
import { InvoiceItemService } from 'src/invoice-item/invoice-item.service';
import { ItemService } from 'src/item/item.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvoiceItem } from 'src/invoice-item/entities/invoice-item.entity';
import { User } from 'src/user/entities/user.entity';
@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoicesRepository: Repository<Invoice>,  private invoiceItemService:InvoiceItemService,
    private itemService:ItemService,
    private userService:UserService
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    
 let user=await this.userService.findOne(createInvoiceDto.userId)
 if(!user)
 {
  throw new BadRequestException('No such user exists', { cause: new Error(), description: 'There is No such user with this id' })
 }
 const itemsadded=[]
 let totalPrice=0
 for (const el of createInvoiceDto.items) {
let item= await this.itemService.findOne(el.item)
console.log(item.price)
totalPrice += el.quantity *item.price;
let invoiceItem= new InvoiceItem();
invoiceItem.item=item
invoiceItem.quantity=el.quantity;
let addedInvoiceItem =await this.invoiceItemService.create(invoiceItem)
itemsadded.push(addedInvoiceItem);
 };
 const invoice= new Invoice();
 invoice.totalPrice=totalPrice;
 invoice.invoiceItems=itemsadded
 invoice.user= user
 console.log(invoice)
 try {
  return await this.invoicesRepository.save(invoice)
 }
 catch(err){
  console.log(err)
 }
  }

 async findAll() {
    return await this.invoicesRepository.find()
  }

  async findOne(id: number) {
    return await this.invoicesRepository.findOneByOrFail({id});
  }

async  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    const invoice = await this.invoicesRepository.findOneByOrFail({id})
    invoice.status=updateInvoiceDto.status
   return await this.invoicesRepository.save(invoice)
  }

async  remove(id: number) {
    const userExists = await this.invoicesRepository.exist({ where: { id: id } })
    if(userExists)
    {
       await this.invoicesRepository.delete({id:id});
      return 'invoice deleted succresfully'
    }
    else {
      throw new BadRequestException('No such invoice exists', { cause: new Error(), description: 'There is No such invoice with this id' })
    }
  
  }

  async userInvoice(userId:number)
  {
  //   return await this.invoicesRepository.find({
  //     where: { user: { id: userId}},
  // });
  return await this.invoicesRepository.query("SELECT h.name, h.price ,p.quantity , i.created_at ,i.status  FROM item  AS h INNER JOIN invoice_item  AS p ON p.itemId  = h.id INNER JOIN invoice AS i ON p.invoiceId  = i.id  INNER JOIN user   AS u ON u.id  = "+userId)
  }

  async InvoiceDetails(id:number)
  {
    return await this.invoiceItemService.invoiceItems(id)
  }
}
