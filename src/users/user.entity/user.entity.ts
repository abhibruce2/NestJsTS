import { Column, Entity, PrimaryGeneratedColumn, Repository} from 'typeorm';



@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_name: string;

    @Column()
    email: string;

    @Column()
    password: string;    
}
