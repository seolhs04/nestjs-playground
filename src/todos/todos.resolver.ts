import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodosDto } from './dto/todos.dto';
import { TodosInput } from './dto/todos.input';
import { TodosService } from './todos.service';

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

  @Mutation(() => TodosDto)
  async createTodo(@Args('data') data: TodosInput) {
    return this.todosService.create(data);
  }

  @Mutation(() => String)
  async deleteTodo(@Args('id') id: number) {
    return this.todosService.delete(id);
  }
}
