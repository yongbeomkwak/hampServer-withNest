import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Unique,
} from 'typeorm';

//@Entity({ name: 'user' })
//@Unique(['user_id'])
export class User {
  id: number;
  name: string;
}
