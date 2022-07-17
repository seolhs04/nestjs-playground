import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesServies: MoviesService) {}
  @Get()
  getAll() {
    return this.moviesServies.getAll();
  }
  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.moviesServies.getOne(id);
  }
  @Post()
  create(@Body() data) {
    return this.moviesServies.createOne(data);
  }
  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.moviesServies.deleteOne(id);
  }
  @Put('/:id')
  update(@Param('id') id: string, @Body() updateData) {
    return this.moviesServies.updateOne(id, updateData);
  }
}
