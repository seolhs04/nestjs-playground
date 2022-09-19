import { Field, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@ObjectType()
export class TodosDto {
  @IsNumber()
  @Field()
  readonly id: number;

  @IsString()
  @Field()
  readonly title: string;

  @IsString()
  @Field()
  readonly description: string;

  @IsString()
  @Field()
  readonly createdAt: string;
}
