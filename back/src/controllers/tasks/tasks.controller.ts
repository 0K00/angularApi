/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-02-08 09:32:41                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-02-08 13:39:23                               *
 * @FilePath              : angularApi/back/src/controllers/tasks/tasks.controller.ts*
 * @CopyRight             : MerBleueAviation                                  *
 *****************************************************************************/

/* Imports */
import {
    Controller,
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
    HttpException,
    HttpStatus,
  } from "@nestjs/common";

/* Services */
import { PrismaService } from "src/prisma.service";
/***/

interface ITask {
    id: string,
    title: string,
    description: string,
    completed: boolean
}

@Controller("api/tasks")
export class TasksController {
    constructor(private prisma: PrismaService) {
    }

    /**
     * Get all tasks
     * @return - Tasks list 
     */
    @Get()
    async getAll(): Promise<ITask[]> {
        return await this.prisma.tasks.findMany();
    }
    /***/

    /**
     * Get task by id
     * @param id - Task's id
     * @return - Task data
     */
    @Get("/:id")
    async getById(@Param("id") id: string): Promise<ITask> {
        let task = await this.prisma.tasks.findFirst({where: {id: id}});
        if (task) return task;
        else throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }
    /***/

    /**
     * Create task
     * @param body - Task content
     * @return - New Task 
     */
    @Post("")
    async create(@Body() body: ITask): Promise<ITask> {
        let task = await this.prisma.tasks.create({
        data: body
        });
        return task;
    }
    /***/

    /**
     * Edit task
     * @param id - Task to update
     * @param body - Data to update 
     * @return - Update Task
     */
    @Put(":id")
    async update(@Param("id") id: string, @Body() body: ITask): Promise<ITask> {
        let task =  await this.prisma.tasks.update({
        where: {id: id},
        data: body
        });

        return task;
    }
    /***/

    /**
     * Delete label
     * @param id - Label to delete
     * @return - Message 
     */
    @Delete("/:id")
    async delete(@Param("id") id: string): Promise<{message: string}> {
        await this.prisma.tasks.delete({where: {id: id}});
        return {message: `Label ${id} has been removed`};
    }
    /***/
}


