import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { ActorModule } from './actor/actor.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [MovieModule, ActorModule, GenreModule],
})
export class AppModule {}
