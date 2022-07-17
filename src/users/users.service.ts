import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './users/users.entity';

@Injectable()
export class UsersService {
  private users: Users[] = [];
  getAllUsers() {
    return this.users;
  }
  getUser(id) {
    const user = this.users.find((user) => user.id === +id);
    if (user) {
      return user;
    } else {
      throw new NotFoundException('not found');
    }
  }
  createUser(data) {
    this.users.push({ id: this.users.length, ...data });
    return true;
  }
  deleteUser(id) {
    this.getUser(id);
    this.users = this.users.filter((user) => user.id !== +id);
    return true;
  }
  updateUser(id, body) {
    this.getUser(id);
    this.deleteUser(id);
    this.createUser(body);
    return true;
  }
}
