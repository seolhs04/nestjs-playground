import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll()', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne()', () => {
    it('should return a movie', () => {
      service.createOne({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID not found');
      }
    });
  });

  describe('deleteOne()', () => {
    it('delete a Movie', () => {
      service.createOne({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });
    it('should return 404 error', () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('createOne()', () => {
    it('should create a movie', () => {
      const beforeCreateLength = service.getAll().length;
      service.createOne({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const afterCreateLength = service.getAll().length;
      expect(afterCreateLength).toBeGreaterThan(beforeCreateLength);
    });
  });

  describe('updateOne()', () => {
    it('should update a moive', () => {
      service.createOne({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      service.updateOne(1, { title: 'Update Test' });
      const movie = service.getOne(1);
      expect(movie.title).toEqual('Update Test');
    });

    it('should return 404 error', () => {
      try {
        service.updateOne(999, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
