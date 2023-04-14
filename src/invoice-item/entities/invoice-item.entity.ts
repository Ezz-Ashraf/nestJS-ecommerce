import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Invoice } from 'src/invoice/entities/invoice.entity';
import { Item } from 'src/item/entities/item.entity';
@Entity()
export class InvoiceItem {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Invoice, (invoice) => invoice.invoiceItems)
    invoice: Invoice

    // @ManyToOne(() => User, (user) => user.invoiceItems)
    // user: User

    @ManyToOne(() => Item, (item) => item.invoiceItems)
    item: Item

    @Column()
    quantity: number;
}
