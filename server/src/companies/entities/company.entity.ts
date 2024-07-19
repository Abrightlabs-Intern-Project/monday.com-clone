import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field()
  companyId: string;
  @Field()
  companyName: string;
  @Field()
  companyDescription: string;
}
