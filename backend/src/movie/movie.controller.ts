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
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

@Controller('movie')
export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	@Get()
	@ApiOperation({ summary: 'Get all movies' })
	@ApiResponse({
		status: 200,
		type: [MovieDto],
		description: 'Return all movies'
	})
	getAll() {
		return this.movieService.getAll()
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get movie by id' })
	@ApiResponse({
		status: 200,
		description: 'Return movie by id'
	})
	getById(@Param('id') id: string) {
		return this.movieService.getById(id)
	}

	@Post()
	@ApiOperation({ summary: 'Create movie' })
	@ApiResponse({
		status: 201,
		description: 'Return created movie'
	})
	create(@Body() dto: MovieDto) {
		return this.movieService.create(dto)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update movie' })
	@ApiResponse({
		status: 200,
		description: 'Return updated movie'
	})
	update(@Param('id') id: string, @Body() dto: MovieDto) {
		return this.movieService.update(id, dto)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete movie' })
	@ApiResponse({
		status: 200,
		description: 'Return deleted movie'
	})
	delete(@Param('id') id: string) {
		return this.movieService.delete(id)
	}
}
