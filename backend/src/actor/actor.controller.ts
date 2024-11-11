import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common'
import { ActorService } from './actor.service'
import { ActorDto } from './dto/actor.dto'

@Controller('actor')
export class ActorController {
	constructor(private actorService: ActorService) {}

	@Get()
	getAll() {
		return this.actorService.getAll()
	}

	@Get(':id')
	getById(@Param('id') id: string) {
		return this.actorService.getById(id)
	}

	@Post()
	create(@Body() body: ActorDto) {
		return this.actorService.create(body)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() body: ActorDto) {
		return this.actorService.update(id, body)
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.actorService.delete(id)
	}
}
