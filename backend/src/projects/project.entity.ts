import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  tech_stack: string;

  @Column({ nullable: true })
  github_url: string;

  @Column({ nullable: true })
  demo_url: string;

  @Column({ nullable: true })
  preview_url: string;

  @Column({ nullable: true })
  image_url: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  constructor(partial: Partial<Project>) {
    Object.assign(this, partial);
  }
}
