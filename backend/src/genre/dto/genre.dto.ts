import { IsNotEmpty, IsString } from 'class-validator'

export class GenreDto {
	@IsNotEmpty()
	@IsString()
	name: string
}
