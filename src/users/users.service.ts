import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  getAllUsers() {
    throw new NotFoundException('not found');
  }
  getUser(id) {
    throw new NotFoundException('not found');
  }
  createUser(data) {
    throw new NotFoundException('not found');
  }
  deleteUser(id) {
    throw new NotFoundException('not found');
  }
  updateUser(id, body) {
    throw new NotFoundException('not found');
  }
}
