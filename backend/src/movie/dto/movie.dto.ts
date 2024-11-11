import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class MovieDto {
	@IsNotEmpty()
	@IsString()
	title: string

	@IsNotEmpty()
	release: Date

	@IsNotEmpty()
	@IsNumber()
	rating: number

	@IsNotEmpty()
	@IsNumber()
	duration: number

	@IsNotEmpty()
	genreIds: string[]

	@IsNotEmpty()
	actorIds: string[]
}
