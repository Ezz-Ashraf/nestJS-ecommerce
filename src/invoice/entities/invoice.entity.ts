import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn , ManyToOne , OneToMany} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { InvoiceItem } from 'src/invoice-item/entities/invoice-item.entity';
@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, (user) => user.invoices)
    user: User
  
    @OneToMany(() => InvoiceItem , (invoiceItems) =>invoiceItems.invoice )
    invoiceItems :InvoiceItem[]

    @Column()
    totalPrice: number;

    @CreateDateColumn()
    created_at: Date; // Creation date
  
    @UpdateDateColumn()
    updated_at: Date; // Last updated date
}
