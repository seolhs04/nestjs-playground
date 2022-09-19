import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodosCreate } from './dto/todos-create.dto';
import { TodosUpdate } from './dto/todos-update.dto';
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

  async create(data: TodosCreate) {
    await this.todosRepository.save(data);
    return { message: `todo가 생성 되었습니다.` };
  }

  async delete(id: number) {
    await this.getOne(id);
    this.todosRepository.delete({ id });
    return { message: `${id}번 항목이 삭제되었습니다` };
  }

  async update(id: number, data: TodosUpdate) {
    const isExist = await this.getOne(id);
    if (isExist) {
      await this.todosRepository.update(id, data);
    }
    return { message: `${id}번 항목이 수정되었습니다` };
  }
}
