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

@Controller('genre')
export class GenreController {
	constructor(private readonly genreService: GenreService) {}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.genreService.findOne(id)
	}

	@Get()
	findAll() {
		return this.genreService.findAll()
	}

	@Post()
	create(@Body() data: GenreDto) {
		return this.genreService.create(data)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() data: GenreDto) {
		return this.genreService.update(id, data)
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.genreService.delete(id)
	}
}
