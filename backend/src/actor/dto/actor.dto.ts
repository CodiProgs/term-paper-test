import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ActorDto {
	@IsNotEmpty()
	@IsString()
	fullName: string

	@IsNotEmpty()
	birthday: Date

	@IsNotEmpty()
	@IsNumber()
	height: number
}
