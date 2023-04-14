import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn ,OneToMany } from 'typeorm';
import { InvoiceItem } from 'src/invoice-item/entities/invoice-item.entity';
@Entity()
export class Item {
        @PrimaryGeneratedColumn()
        id: number;
      
        @Column()
        name: string;
      
        @Column()
        price: number;

        @CreateDateColumn()
        created_at: Date; // Creation date
      
        @UpdateDateColumn()
        updated_at: Date; // Last updated date

        @OneToMany(() => InvoiceItem, (invoiceItems) => invoiceItems.item)
        invoiceItems:InvoiceItem[]
}
