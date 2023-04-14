import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn , ManyToOne , OneToMany} from 'typeorm';
import { Invoice } from 'src/invoice/entities/invoice.entity';
@Entity()
export class InvoiceItem {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Invoice, (invoice) => invoice.invoiceItems)
    invoice: Invoice
}
