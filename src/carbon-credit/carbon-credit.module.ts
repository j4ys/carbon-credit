import { Module } from '@nestjs/common';
import { CarbonCreditController } from './carbon-credit.controller';
import { DynamicServiceFactory } from './utils/service-factory';
import { ReforestationCarbonCreditService } from './services/reforestation-carbon-credit.service';

@Module({
  controllers: [CarbonCreditController],
  providers: [
    {
      provide: 'DYNAMIC_SERVICE', // Token for the dynamic service
      useFactory: (factory: DynamicServiceFactory) => factory.createService(),
      inject: [DynamicServiceFactory],
    },
    DynamicServiceFactory,
    ReforestationCarbonCreditService,
  ],
})
export class CarbonCreditModule {}
