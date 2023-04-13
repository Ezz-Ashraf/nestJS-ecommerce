import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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
}