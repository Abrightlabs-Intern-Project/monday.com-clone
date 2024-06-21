import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => [String], { nullable: true })
  tasks?: [string];
}
