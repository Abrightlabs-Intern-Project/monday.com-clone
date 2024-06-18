import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}
  async createTask(data: CreateTaskInput) {
    const { sprintId, ...taskData } = data;
    return await this.prisma.task.create({
      data: {
        ...taskData,
        sprint: { connect: { sprintId: sprintId } },
      },
    });
  }

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany(); // Retrieves all tasks from the database
  }

  async findOne(id: string): Promise<Task | null> {
    const task = await this.prisma.task.findUnique({ where: { taskId: id } });
    return task;
  }
  async updateTask(
    id: string,
    updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { taskId: id } });

    if (!task) {
      throw new Error(`Task with ID ${id} not found.`);
    }

    return this.prisma.task.update({
      where: { taskId: id },
      data: updateTaskInput,
    });
  }
  async deleteTask(taskId: string) {
    await this.prisma.taskUser.deleteMany({
      where: { taskId: taskId },
    });
    // Delete the task from Task table
    await this.prisma.task.delete({
      where: { taskId: taskId },
    });
    return true;
  }
}
