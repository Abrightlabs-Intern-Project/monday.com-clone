import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() data: CreateTaskInput) {
    //console.log(data);
    return this.tasksService.createTask(data);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTaskInput,
  ): Promise<Task> {
    data.name = data.task;
    return this.tasksService.updateTask(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.tasksService.deleteTask(id);
  }

  @Post('addUser')
  async addUser(@Body() data: { userId: string; taskId: string }) {
    return this.tasksService.addUser(data);
  }

  @Get('sprint/:sprintId')
  async getSprintTasks(@Param('sprintId') sprintId: string): Promise<Task[]> {
    return this.tasksService.getSprintTasks(sprintId);
  }
}
