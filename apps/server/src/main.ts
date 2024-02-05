import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  app.useGlobalPipes(new ValidationPipe())

  app.enableCors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    credentials: true,
    allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })

  await app.listen(3005, '0.0.0.0')
  console.log(`Application is running on: ${await app.getUrl()}`)
  console.log(`GraphQL Playground: ${await app.getUrl()}/graphql`)
}
bootstrap()
