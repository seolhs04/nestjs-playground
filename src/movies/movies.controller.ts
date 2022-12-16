import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { type } from 'os';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entity/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
@ApiTags('영화 API')
export class MoviesController {
  constructor(private readonly moviesServies: MoviesService) {}

  @Get()
  @ApiOperation({ summary: '전체 영화 조회 api' })
  getAll() {
    return this.moviesServies.getAll();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'id로 영화 조회 api' })
  @ApiCreatedResponse({ status: 201, description: '영화를 조회.', type: Movie })
  getOne(@Param('id') id: number) {
    return this.moviesServies.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: '영화 생성 api' })
  create(@Body() data: CreateMovieDto) {
    return this.moviesServies.createOne(data);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'id로 영화 삭제 api' })
  remove(@Param('id') id: number) {
    return this.moviesServies.deleteOne(id);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'id로 영화 업데이트 api' })
  update(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesServies.updateOne(id, updateData);
  }
}
