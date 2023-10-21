import { Controller, Get, Param } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get(':competitionId')
  async loadResultFromCompetition(
    @Param('competitionId') competitionId: string,
  ) {
    return this.resultsService.getResultsFromWcaWebsite(competitionId);
  }
}
