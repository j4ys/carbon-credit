import { Module } from '@nestjs/common';
import { CarbonCreditModule } from './carbon-credit/carbon-credit.module';

@Module({
  imports: [CarbonCreditModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
