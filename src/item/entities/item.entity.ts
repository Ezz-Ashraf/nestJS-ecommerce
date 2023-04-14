import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Item {
        @PrimaryGeneratedColumn()
        id: number;
      
        @Column()
        name: string;
      
        @Column()
        price: number;
}
