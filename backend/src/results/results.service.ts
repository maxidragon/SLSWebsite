import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { DbService } from '../db/db.service';
import axios from '../axios';

@Injectable()
export class ResultsService {
  constructor(private readonly prisma: DbService) {}

  async getResultsFromWcaWebsite(competitionId: string) {
    const comp = await this.prisma.competition.findUnique({
      where: {
        wcaId: competitionId,
      },
    });
    if (comp) {
      const wcif = await axios.get(`competitions/${competitionId}/wcif/public`);
      wcif.data.events.forEach((eventInfo) => {
        const roundsCount = eventInfo.rounds.length;
        eventInfo.rounds[roundsCount - 1].results.forEach((result) => {
          //check if competitor exist, create if not
          //save result from final
          //save results from previous rounds only if competitor doesnt proceedees to next round
        });
      });
    } else {
      throw new NotFoundException('Competition not found');
    }
  }
}
