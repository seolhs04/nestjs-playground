import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class TodosCreate {
  @IsString()
  @Field(() => String)
  readonly title: string;

  @IsString()
  @Field(() => String)
  readonly description: string;
}
