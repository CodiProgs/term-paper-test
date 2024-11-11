import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common'
import { MovieDto } from './dto/movie.dto'
import { MovieService } from './movie.service'

@Controller('movie')
export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	@Get()
	getAll() {
		return this.movieService.getAll()
	}

	@Get(':id')
	getById(@Param('id') id: string) {
		return this.movieService.getById(id)
	}

	@Post()
	create(@Body() dto: MovieDto) {
		return this.movieService.create(dto)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() dto: MovieDto) {
		return this.movieService.update(id, dto)
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.movieService.delete(id)
	}
}
