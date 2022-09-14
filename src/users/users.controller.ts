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
  getAllUsers() {
    return this.userServices.getAll();
  }
  @Get('/:id')
  getUser(@Param('id') id: number) {
    return this.userServices.getOne(id);
  }
  @Post()
  createUser(@Body() data) {
    return this.userServices.createOne(data);
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userServices.deleteOne(id);
  }
  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() data) {
    return this.userServices.updateOne(id, data);
  }
}
