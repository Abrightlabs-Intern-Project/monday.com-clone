// src/tasks/dto/create-task.input.ts

import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  type: string;

  @Field()
  priority: string;

  @Field()
  status: string;
  @Field()
  actualSP?: string;
  @Field(() => [String], { nullable: true })
  userId?: [string];

  @Field(() => String, { nullable: true })
  sprintId?: string;
}
