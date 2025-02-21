import { CarbonCreditBaseService } from './carbon-credit.base.service';

export class RenewableEnergyCarbonCreditService extends CarbonCreditBaseService {
  static readonly CARBON_CREDIT_FACTOR = 0.05; // 5% of the investment
  static readonly ROI_FACTOR = 250; // credit value of 1 ton of CO2

  calculateCarbonCredits(investment: number): number {
    return investment * RenewableEnergyCarbonCreditService.CARBON_CREDIT_FACTOR;
  }

  calculateROI(credits: number, investment: number): number {
    return (
      (credits * RenewableEnergyCarbonCreditService.ROI_FACTOR) / investment
    );
  }
}
