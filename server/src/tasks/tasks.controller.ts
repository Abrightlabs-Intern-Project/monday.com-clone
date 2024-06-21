import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskInput) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskInput,
  ) {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }
  @Get()
  async addUser(@Body() data: { userId: string; taskId: string }) {
    return this.tasksService.addUser(data);
  }
  @Get('/gettasks/:id')
  async getSprintTasks(@Param('id') sprintId: string) {
    return this.tasksService.getSprintTasks(sprintId);
  }
}
