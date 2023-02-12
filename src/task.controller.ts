import {Body, Controller, Get, HttpStatus, Put, Param, Post, Res } from "@nestjs/common";
import { TaskService } from "./task.service";
import { TaskEntity } from "./task";

@Controller('task')
export class TaskController{
    constructor(private taskService : TaskService) {

    }
    @Get()
    async findAll() {
        const response = await this.taskService.findAll();
        return response
    }
    @Get(":assignee")
    async findOne(@Param('assignee') assignee: string ): Promise<TaskEntity> {
        const Response = await this.taskService.findBy( assignee );
        return Response
    }
    @Post()
    async create(@Body() createTaskDto: TaskEntity, ){
        const response = await this.taskService.create(createTaskDto);
        return response
    }
    @Put(":id")
    async update(@Param() id: number,@Body() createTaskDto: TaskEntity, ){
        const response = await this.taskService.update(id, createTaskDto);
        return response
    }
    // async remove(@Body() id: number, ){
    //     const response = await this.taskService.remove(id)
    // }
}