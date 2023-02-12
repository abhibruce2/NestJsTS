import { Repository} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task';

@Injectable()
export class TaskService{

    constructor(
        @InjectRepository(TaskEntity)
        private taskRepository: Repository<TaskEntity>,
    ){}

    findAll(): Promise<TaskEntity[]>{
        return this.taskRepository.find();
    }
    async findBy(assignee: string): Promise<TaskEntity> {
        return await this.taskRepository.findOne({ where: { assignee } });
      }
    create(task: TaskEntity): Promise<TaskEntity>{
        return this.taskRepository.save(task);
    }
    async update(id: number, task: TaskEntity) {
        return this.taskRepository.update(id, task);        
    }
    // async remove(id: number):  Promise<TaskEntity> {
    //     return this.taskRepository.delete(id);        
    // }
}


