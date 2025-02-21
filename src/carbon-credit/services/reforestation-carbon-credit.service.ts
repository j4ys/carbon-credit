import { CarbonCreditBaseService } from './carbon-credit.base.service';

export class ReforestationCarbonCreditService extends CarbonCreditBaseService {
  calculateCarbonCredits(investment: number): number {
    return investment * 0.5;
  }

  calculateROI(credits: number, investment: number): number {
    return credits / investment;
  }
}
