import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
//   import { Post } from './Post';
//   import { Profile } from './Profile';
  
  @Entity({ name: 'users' })
  export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;
  
    @Column({ unique: true })
    user_name: string;
  
    @Column({unique: true})
    email: string
    
    @Column()
    password: string;
  

  

  
    // @OneToOne(() => Profile)
    // @JoinColumn()
    // profile: Profile;
  
    // @OneToMany(() => Post, (post) => post.user)
    // posts: Post[];
  }