import { Module } from '@nestjs/common';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';

@Module({
  imports: [LoggerModule, ExceptionsModule, RepositoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
