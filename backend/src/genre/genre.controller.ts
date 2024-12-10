import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common'
import { GenreDto } from './dto/genre.dto'
import { GenreService } from './genre.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

@Controller('genre')
export class GenreController {
	constructor(private readonly genreService: GenreService) {}

	@Get(':id')
	@ApiOperation({ summary: 'Get genre by id' })
	@ApiResponse({
		status: 200,
		description: 'Return genre by id'
	})
	getById(@Param('id') id: string) {
		return this.genreService.getById(id)
	}

	@Get()
	@ApiOperation({ summary: 'Get all genres' })
	@ApiResponse({
		status: 200,
		description: 'Return all genres'
	})
	getAll() {
		return this.genreService.getAll()
	}

	@Post()
	@ApiOperation({ summary: 'Create genre' })
	@ApiResponse({
		status: 201,
		description: 'Return created genre'
	})
	create(@Body() data: GenreDto) {
		return this.genreService.create(data)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update genre' })
	@ApiResponse({
		status: 200,
		description: 'Return updated genre'
	})
	update(@Param('id') id: string, @Body() data: GenreDto) {
		return this.genreService.update(id, data)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete genre' })
	@ApiResponse({
		status: 200,
		description: 'Genre deleted'
	})
	delete(@Param('id') id: string) {
		return this.genreService.delete(id)
	}
}
