import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Task } from '../../tasks/entities/task.entity';
import { Company } from '../../companies/entities/company.entity';
@ObjectType()
export class Sprint {
  @Field()
  sprintId: string;

  @Field()
  name: string;

  @Field()
  goals: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field(() => [Task], { nullable: true })
  tasks?: Task[];
  @Field({ nullable: true })
  company?: string;
}
