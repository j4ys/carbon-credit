import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class CarbonCreditBaseService {
  constructor() {}

  abstract calculateCarbonCredits(investment: number): number;
  abstract calculateROI(credits: number, investment: number): number;
}
