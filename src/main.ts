import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { STRINGS } from './common/strings';
import { APP_VERSION, SWAGGER_PATH } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(STRINGS.SWAGGER_TITLE)
    .setDescription(STRINGS.SWAGGER_DESCRIPTION)
    .setVersion(APP_VERSION)
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(SWAGGER_PATH, app, documentFactory);

  await app.listen(3000);
}
bootstrap();
