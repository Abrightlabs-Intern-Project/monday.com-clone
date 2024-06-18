import { CreateTaskInput } from './create-task.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  @Field(() => ID, { nullable: true })
  taskId?: string;
}
