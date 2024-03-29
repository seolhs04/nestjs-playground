import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TodosModule } from './todos/todos.module';
import { ApolloDriver } from '@nestjs/apollo';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'nest_test_db',
      entities: [__dirname + '/**/entity/*.entity.{js,ts}'],
      synchronize: true,
    }),
    UsersModule,
    TodosModule,
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
