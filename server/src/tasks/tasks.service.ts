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
    return this.prisma.task.findMany();
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

    await this.prisma.task.delete({
      where: { taskId: taskId },
    });
    return true;
  }
  async addUser(data: { userId: string; taskId: string }) {
    const { userId, taskId } = data;
    const user = await this.prisma.user.findUnique({ where: { userId } });
    const task = await this.prisma.task.findUnique({ where: { taskId } });

    if (!user || !task) {
      throw new Error('User or Task not found');
    }
    return await this.prisma.taskUser.create({
      data: {
        userId,
        taskId,
      },
    });
  }

  async getSprintTasks(sprintId: string) {
    return await this.prisma.task.findMany({ where: { sprintId } });
  }
}
