import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ActorController } from './actor.controller'
import { ActorService } from './actor.service'

@Module({
	providers: [ActorService, PrismaService],
	controllers: [ActorController]
})
export class ActorModule {}
