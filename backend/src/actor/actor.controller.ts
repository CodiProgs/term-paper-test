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
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

@Controller('actor')
export class ActorController {
	constructor(private actorService: ActorService) {}

	@Get()
	@ApiOperation({ summary: 'Get all actors' })
	@ApiResponse({
		status: 200,
		description: 'Return all actors'
	})
	getAll() {
		return this.actorService.getAll()
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get actor by id' })
	@ApiResponse({
		status: 200,
		description: 'Return actor by id'
	})
	getById(@Param('id') id: string) {
		return this.actorService.getById(id)
	}

	@Post()
	@ApiOperation({ summary: 'Create actor' })
	@ApiResponse({
		status: 201,
		description: 'Return created actor'
	})
	create(@Body() body: ActorDto) {
		return this.actorService.create(body)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update actor' })
	@ApiResponse({
		status: 200,
		description: 'Return updated actor'
	})
	update(@Param('id') id: string, @Body() body: ActorDto) {
		return this.actorService.update(id, body)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete actor' })
	@ApiResponse({
		status: 200,
		description: 'Actor deleted'
	})
	delete(@Param('id') id: string) {
		return this.actorService.delete(id)
	}
}
