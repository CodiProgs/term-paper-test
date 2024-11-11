import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { MovieDto } from './dto/movie.dto'

@Injectable()
export class MovieService {
	constructor(private readonly prisma: PrismaService) {}

	async getAll() {
		return this.prisma.movie.findMany({
			include: {
				actors: true,
				genres: true
			}
		})
	}

	async getById(id: string) {
		return this.prisma.movie.findUnique({
			where: { id },
			include: {
				actors: true,
				genres: true
			}
		})
	}

	async create(dto: MovieDto) {
		const { actorIds, genreIds, ...data } = dto

		return this.prisma.movie.create({
			data: {
				...data,
				actors: {
					connect: actorIds.map(id => ({ id }))
				},
				genres: {
					connect: genreIds.map(id => ({ id }))
				}
			}
		})
	}

	async update(id: string, dto: MovieDto) {
		const { actorIds, genreIds, ...data } = dto

		return this.prisma.movie.update({
			where: { id },
			data: {
				...data,
				actors: {
					set: actorIds.map(id => ({ id }))
				},
				genres: {
					set: genreIds.map(id => ({ id }))
				}
			}
		})
	}

	async delete(id: string) {
		return this.prisma.movie.delete({
			where: { id }
		})
	}
}
