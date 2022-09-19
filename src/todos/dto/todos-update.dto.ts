import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class TodosUpdate {
  @IsOptional()
  @IsString()
  @Field(() => String)
  readonly title: string;

  @IsOptional()
  @IsString()
  @Field(() => String)
  readonly description: string;
}
