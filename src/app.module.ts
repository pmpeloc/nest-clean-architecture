import { Module } from '@nestjs/common';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';

@Module({
  imports: [LoggerModule, ExceptionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
