import { Inject, Injectable, Scope } from '@nestjs/common';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { CarbonCreditBaseService } from '../services/carbon-credit.base.service';
import { CarbonCreditEvaluateRequest } from '../dtos/carbonProject/carbonCreditEvaluateRequest';
import { ReforestationCarbonCreditService } from '../services/reforestation-carbon-credit.service';
import { RenewableEnergyCarbonCreditService } from '../services/renewableEnergy-carbon-credit.service';

@Injectable({ scope: Scope.REQUEST })
export class DynamicServiceFactory {
  constructor(
    @Inject(REQUEST)
    private readonly request: Request,
  ) {}

  createService(): CarbonCreditBaseService {
    try {
      const projectType: string = (
        this.request.body as CarbonCreditEvaluateRequest
      )['projectType'];

      switch (projectType) {
        case 'reforestation':
          return new ReforestationCarbonCreditService();
        case 'renewableEnergy':
          return new RenewableEnergyCarbonCreditService();
        default:
          throw new Error('Invalid entity type');
      }
    } catch (e) {
      console.error(e);
      throw new Error('Invalid entity type');
    }
  }
}
