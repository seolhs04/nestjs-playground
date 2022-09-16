import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entity/todos.entity';
import { TodosResolver } from './todos.resolver';
import { TodosService } from './todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodosResolver, TodosService],
})
export class TodosModule {}
