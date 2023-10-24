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
      for (const event of wcif.data.events) {
        await this.prisma.competitionEvent.upsert({
          create: {
            competition: {
              connect: {
                id: comp.id,
              },
            },
            eventId: event.id,
          },
          update: {},
          where: {
            competitionId_eventId: {
              competitionId: comp.id,
              eventId: event.id,
            },
          },
        });
      }
      for (const person of wcif.data.persons) {
        const competitor = await this.prisma.competitor.findFirst({
          where: {
            wcaId: person.wcaId,
          },
        });
        if (!competitor) {
          await this.prisma.competitor.create({
            data: {
              wcaId: person.wcaId || null,
              name: person.name,
            },
          });
        }
      }
      for (const eventInfo of wcif.data.events) {
        const event = eventInfo;
        event.rounds.sort((a, b) => {
          return b.id.localeCompare(a.id);
        });
        console.log(event.rounds.map((round) => round.id));
        for (const round of event.rounds) {
          for (const result of round.results) {
            const person = wcif.data.persons.find(
              (person) => person.registrantId === result.personId,
            );
            const competitor = await this.prisma.competitor.findFirst({
              where: {
                wcaId: person.wcaId,
              },
            });
            if (competitor) {
              const dbResult = await this.prisma.result.findFirst({
                where: {
                  competitionId: comp.id,
                  competitorId: competitor.id,
                  eventId: event.id,
                },
              });
              console.log(dbResult);
              if (!dbResult) {
                try {
                  await this.prisma.result.create({
                    data: {
                      competitor: {
                        connect: {
                          id: competitor.id,
                        },
                      },
                      competition: {
                        connect: {
                          id: comp.id,
                        },
                      },
                      eventId: event.id,
                      pos: result.ranking,
                      best: result.best,
                      average: result.average,
                    },
                  });
                } catch (err) {
                  console.log(err);
                }
              }
            }
          }
        }
      }
    } else {
      throw new NotFoundException('Competition not found');
    }
  }
}
