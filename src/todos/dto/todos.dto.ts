import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodosDto {
  @Field()
  readonly id: number;

  @Field()
  readonly title: string;

  @Field()
  readonly description: string;

  @Field()
  readonly createdAt: string;
}
