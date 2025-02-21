import {
  Body,
  Controller,
  HttpStatus,
  Inject,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CarbonCreditEvaluateRequest } from './dtos/carbonProject/carbonCreditEvaluateRequest';
import { CarbonCreditBaseService } from './services/carbon-credit.base.service';

@Controller('')
export class CarbonCreditController {
  constructor(
    @Inject('DYNAMIC_SERVICE')
    private readonly dynamicService: CarbonCreditBaseService,
  ) {}

  @Post('evaluate')
  create(
    @Body() evaluateCreditRequest: CarbonCreditEvaluateRequest,
    @Res() res: Response,
  ) {
    const { investmentAmount } = evaluateCreditRequest;
    const credits =
      this.dynamicService.calculateCarbonCredits(investmentAmount);
    const roi = this.dynamicService.calculateROI(credits, investmentAmount);
    return res.status(HttpStatus.OK).json({
      carbonCreditsGenerated: credits,
      estimatedROI: roi,
      projectName: evaluateCreditRequest.projectName,
    });
  }
}
