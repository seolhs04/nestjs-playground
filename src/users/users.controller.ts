import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersService) {}
  @Get()
  getAll() {
    return this.userServices.getAllUsers();
  }
  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.userServices.getUser(id);
  }
  @Post()
  createUser(@Body() data) {
    return this.userServices.createUser(data);
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userServices.deleteUser(id);
  }
  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() data) {
    return this.userServices.updateUser(id, data);
  }
}
