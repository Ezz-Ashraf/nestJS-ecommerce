import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn , ManyToOne , OneToMany, JoinColumn} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { InvoiceItem } from 'src/invoice-item/entities/invoice-item.entity';

export enum InvoiceStatus {
    Placed = 'PLACED',
    Delivered = 'DELIVERED',
    Cancelled = 'CANCELLED'
  }

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;
  

    @Column()
    userId:number

    @ManyToOne(() => User, (user) => user.invoices)
    @JoinColumn()
    user: User
  
    @OneToMany(() => InvoiceItem , (invoiceItems) =>invoiceItems.invoice )
    invoiceItems :InvoiceItem[]

    @Column()
    totalPrice: number;

   

    @CreateDateColumn()
    created_at: Date; // Creation date
  
    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @Column({
        type: 'enum',
        enum: InvoiceStatus,
        default: InvoiceStatus.Placed
      })
      status: InvoiceStatus

}
