import { Injectable, NotFoundException, MessageEvent } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodosInput } from './dto/todos.input';
import { Todo } from './entity/todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  async getAll() {
    return await this.todosRepository.find();
  }

  async getOne(id: number) {
    const result = await this.todosRepository.findOneBy({ id });
    if (result) {
      return result;
    } else {
      throw new NotFoundException('정보가 없습니다.');
    }
  }

  async create(data: TodosInput) {
    return this.todosRepository.save(data);
  }

  async delete(id: number) {
    await this.getOne(id);
    this.todosRepository.delete({ id });
    return `${id}번 항목이 삭제되었습니다`;
  }
}
