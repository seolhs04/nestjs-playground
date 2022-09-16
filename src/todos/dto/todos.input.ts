import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TodosInput {
  @Field(() => String)
  readonly title: string;

  @Field(() => String)
  readonly description: string;
}
