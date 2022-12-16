import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @ApiProperty({
    example: 'cyber punk',
    description: 'title',
    required: true,
  })
  readonly title: string;

  @IsNumber()
  @ApiProperty({
    example: '2077',
    description: 'year',
    required: true,
  })
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  @ApiProperty({
    example: 'romantic',
    description: 'genres',
  })
  readonly genres: string[];
}
