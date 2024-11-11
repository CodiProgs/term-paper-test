import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ActorDto } from './dto/actor.dto'

@Injectable()
export class ActorService {
	constructor(private readonly prisma: PrismaService) {}

	async getAll() {
		return this.prisma.actor.findMany()
	}

	async getById(id: string) {
		return this.prisma.actor.findUnique({
			where: { id }
		})
	}

	async create(dto: ActorDto) {
		return this.prisma.actor.create({
			data: dto
		})
	}

	async update(id: string, dto: ActorDto) {
		return this.prisma.actor.update({
			where: { id },
			data: dto
		})
	}

	async delete(id: string) {
		return this.prisma.actor.delete({
			where: { id }
		})
	}
}
