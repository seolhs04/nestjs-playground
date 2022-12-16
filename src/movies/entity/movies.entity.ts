import { ApiProperty } from '@nestjs/swagger';

export class Movie {
  @ApiProperty({
    example: 1,
    description: 'id',
  })
  id: number;

  @ApiProperty({
    example: 'hello',
    description: 'title',
  })
  title: string;

  @ApiProperty({
    example: 2022,
    description: 'year',
  })
  year: number;

  @ApiProperty({
    example: ['Action', 'comedy'],
    description: 'id',
  })
  genres: Array<string>;
}
