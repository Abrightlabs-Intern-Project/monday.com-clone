import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}
  async createTask(data: CreateTaskInput) {
    //console.log(data);
    const { sprintId } = data;
    const sprint = await this.prisma.sprint.findUnique({
      where: { sprintId },
    });
    if (!sprint) {
      return new Error('Sprint Not Found');
    }
    // console.log(sprint);
    const newTask = await this.prisma.task.create({
      data: {
        name: data.name,
        status: data.status,
        priority: data.priority,
        type: data.type,
        sprint: {
          connect: { sprintId: sprintId },
        },
      },
    });
    //console.log(newTask);
    return newTask.taskId;
  }

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async findOne(id: string): Promise<Task | null> {
    const task = await this.prisma.task.findUnique({ where: { taskId: id } });
    return task;
  }
  async updateTask(id: string, data: UpdateTaskInput): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { taskId: id } });

    if (!task) {
      throw new Error(`Task with ID ${id} not found.`);
    }
    // console.log(task, data);
    return this.prisma.task.update({
      where: { taskId: id },
      data: {
        taskId: '164028cc-1ded-4cc4-8b96-a93fa0809461',
        name: data.name,
        description: data.description,
        type: data.type,
        priority: data.priority,
        status: data.status,
      },
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
