import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { GenreDto } from './dto/genre.dto'

@Injectable()
export class GenreService {
	constructor(private readonly prisma: PrismaService) {}

	async findOne(id: string) {
		return this.prisma.genre.findUnique({
			where: { id }
		})
	}

	async findAll() {
		return this.prisma.genre.findMany()
	}

	async create(data: GenreDto) {
		return this.prisma.genre.create({
			data
		})
	}

	async update(id: string, data: GenreDto) {
		return this.prisma.genre.update({
			where: { id },
			data
		})
	}

	async delete(id: string) {
		return this.prisma.genre.delete({
			where: { id }
		})
	}
}
