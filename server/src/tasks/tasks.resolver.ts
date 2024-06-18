import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Mutation(() => Task)
  async createTask(@Args('data') data: CreateTaskInput) {
    return await this.tasksService.createTask(data);
  }

  @Query(() => [Task], { name: 'tasks' })
  findAll() {
    return this.tasksService.findAll();
  }

  @Query(() => Task, { name: 'task' })
  findOne(@Args('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Mutation(() => Task)
  updateTask(
    @Args('id') id: string,
    @Args('data') updateTaskInput: UpdateTaskInput,
  ) {
    return this.tasksService.updateTask(id, updateTaskInput);
  }

  @Mutation(() => Task)
  removeTask(@Args('id') taskId: string) {
    return this.tasksService.deleteTask(taskId);
  }
}
