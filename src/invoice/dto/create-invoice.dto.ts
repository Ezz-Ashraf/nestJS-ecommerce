import { IsArray ,IsNumber } from "class-validator";

type itemSelected ={
    item:number,
    quantity:number
}

export class CreateInvoiceDto {
    @IsNumber()
    userId:number

    @IsArray()
    items:itemSelected[]

}
