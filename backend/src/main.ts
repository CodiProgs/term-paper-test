import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.enableCors()
	app.useGlobalPipes(new ValidationPipe())

	const config = new DocumentBuilder()
		.setTitle('API Documentation') // Название вашего API
		.setDescription('The API description') // Описание вашего API
		.setVersion('1.0') // Версия вашего API
		.addTag('cats') // Тег, который можно будет использовать для группировки операций
		.build()

	// Создание документации
	const document = SwaggerModule.createDocument(app, config)

	// Подключение Swagger UI
	SwaggerModule.setup('api', app, document)

	await app.listen(process.env.PORT ?? 4200)
}
bootstrap()
