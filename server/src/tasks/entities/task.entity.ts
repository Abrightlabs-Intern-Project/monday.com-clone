import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';
import { Sprint } from '../../sprints/entities/sprint.entity';

@ObjectType()
export class Task {
  @Field()
  taskId: string;

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

  @Field(() => Sprint, { nullable: true })
  sprint?: Sprint;

  @Field(() => [User])
  users: User[];
}
