import { PartialType } from '@nestjs/mapped-types';
import { CreateInvoiceDto } from './create-invoice.dto';
import {  IsString } from 'class-validator';


export enum InvoiceStatus {
    Placed = 'PLACED',
    Delivered = 'DELIVERED',
    Cancelled = 'CANCELLED'
  }

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {
    @IsString()
    status:InvoiceStatus
}
