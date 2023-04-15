import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { Item } from './entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  exports: [TypeOrmModule , ItemService],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
