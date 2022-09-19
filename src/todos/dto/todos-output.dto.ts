import { Field, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class TodosOutput {
  @IsString()
  @Field(() => String)
  readonly message: string;
}
