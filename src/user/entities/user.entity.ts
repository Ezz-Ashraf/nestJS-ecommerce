import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn , OneToMany } from 'typeorm';
import { Invoice } from 'src/invoice/entities/invoice.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
  
  @CreateDateColumn()
  created_at: Date; // Creation date

  @UpdateDateColumn()
  updated_at: Date; // Last updated date

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  invoices:Invoice[]

}
