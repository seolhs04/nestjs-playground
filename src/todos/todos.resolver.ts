import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodosDto } from './dto/todos.dto';
import { TodosCreate } from './dto/todos-create.dto';
import { TodosService } from './todos.service';
import { TodosOutput } from './dto/todos-output.dto';
import { TodosUpdate } from './dto/todos-update.dto';

@Resolver()
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => [TodosDto])
  async getAllTodos() {
    return await this.todosService.getAll();
  }

  @Query(() => TodosDto)
  async getTodo(@Args('id') id: number) {
    return await this.todosService.getOne(id);
  }

  @Mutation(() => TodosOutput)
  async createTodo(@Args('data') data: TodosCreate) {
    return this.todosService.create(data);
  }

  @Mutation(() => TodosOutput)
  async deleteTodo(@Args('id') id: number) {
    return this.todosService.delete(id);
  }

  @Mutation(() => TodosOutput)
  async updateTodo(@Args('id') id: number, @Args('data') data: TodosUpdate) {
    return this.todosService.update(id, data);
  }
}
