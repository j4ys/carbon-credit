import { CarbonCreditBaseService } from './carbon-credit.base.service';

export class RenewableEnergyCarbonCreditService extends CarbonCreditBaseService {
  calculateCarbonCredits(investment: number): number {
    return investment * 0.25;
  }

  calculateROI(credits: number, investment: number): number {
    return credits / investment;
  }
}
