import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
<<<<<<< HEAD
import { Repository } from 'typeorm/repository/Repository';
import { Users } from './entity/users.entity';
=======
import { Repository } from 'typeorm';
import { User } from './entity/users.entity';
>>>>>>> branch1

@Injectable()
export class UsersService {
  constructor(
<<<<<<< HEAD
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
=======
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getAll() {
    return this.usersRepository.find();
  }

  async getOne(id: number) {
    const result = await this.usersRepository.findOneBy({ id });
    if (result) {
      return result;
    } else {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }
  }

  async createOne(user: User) {
    return this.usersRepository.save(user);
  }

  async deleteOne(id: number) {
    await this.getOne(id);
    this.usersRepository.delete({ id });
    return { message: '삭제 되었습니다.' };
  }

  async updateOne(id: number, user: User) {
    const isExist = await this.getOne(id);
    if (isExist) {
      await this.usersRepository.update(id, user);
    }
    return { message: '수정 되었습니다.' };
>>>>>>> branch1
  }
}
