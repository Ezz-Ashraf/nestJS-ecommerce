import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}
async  create(item: CreateItemDto) {
  if(typeof item.name ==="string" && typeof item.price ==="number")
  {
  await  this.itemsRepository.insert(item)
  return 'Item Entered Succesfully'
  }
  else {
    throw new BadRequestException('Item Name should be string and price should be number', { cause: new Error(), description: 'Validation failed' })
  }
  }

 async findAll() {
    return await this.itemsRepository.find();
  }

 async findOne(id: number) {
  const item = await this.itemsRepository.findOneBy({id:id})
  if(item)
  {
    return item
  }
  else {
    throw new BadRequestException('No such item exists', { cause: new Error(), description: 'There is No such item with this id' })
  }
  }

 async update(id: number, updateItemDto: UpdateItemDto) {
    const userExists = await this.itemsRepository.exist({ where: { id: id } })
    if(userExists)
    {
      await this.itemsRepository.update({  id: id  },updateItemDto)
      return 'item updated succresfully'
    }
    else {
      throw new BadRequestException('No such item exists', { cause: new Error(), description: 'There is No such item with this id' })
    }
  }

 async  remove(id: number) {
    const itemExists = await this.itemsRepository.exist({ where: { id: id } })
  if(itemExists)
  {
     await this.itemsRepository.delete({id:id});
    return 'user deleted succresfully'
  }
  else {
    throw new BadRequestException('No such user exists', { cause: new Error(), description: 'There is No such user with this id' })
  }
  }
}
