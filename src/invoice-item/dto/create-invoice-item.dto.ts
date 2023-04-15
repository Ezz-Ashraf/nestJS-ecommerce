import { IsNumber ,IsObject } from "class-validator";
import { Item } from "src/item/entities/item.entity";
export class CreateInvoiceItemDto {

    @IsObject()
    item:Item

    @IsNumber()
    quantity:number

}
