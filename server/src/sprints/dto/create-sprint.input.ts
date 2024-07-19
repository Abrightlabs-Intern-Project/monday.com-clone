import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSprintInput {
  @Field()
  name: string;

  @Field()
  goals: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field(() => [String], { nullable: true })
  taskIds?: string[];
  @Field({ nullable: true })
  companyId?: string;
}
