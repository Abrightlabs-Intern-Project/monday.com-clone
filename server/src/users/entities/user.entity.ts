import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Task } from 'src/tasks/entities/task.entity';

@ObjectType()
export class User {
  @Field()
  userId: string;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => [Task])
  tasks: Task[];
}
