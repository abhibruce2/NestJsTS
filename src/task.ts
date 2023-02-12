import { Column, Entity, PrimaryGeneratedColumn, Repository} from 'typeorm';



@Entity()
export class TaskEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    properties: string;

    @Column()
    description: string;

    @Column()
    due_date: string;

    @Column()
    assignee: string;

    @Column()
    status: string;
    
}
