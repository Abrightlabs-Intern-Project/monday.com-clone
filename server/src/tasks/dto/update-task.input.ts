import { CreateTaskInput } from './create-task.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  @Field({ nullable: true })
  taskId?: string;
  @Field({ nullable: true })
  name?: string;
  @Field()
  task?: string;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  type?: string;
  @Field({ nullable: true })
  priority?: string;
  @Field({ nullable: true })
  status?: string;
  @Field({ nullable: true })
  actualSP?: string;
  @Field({ nullable: true })
  sprintId?: string;
}
