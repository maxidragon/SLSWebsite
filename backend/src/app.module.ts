import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RankingModule } from './ranking/ranking.module';
import { ResultsModule } from './results/results.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [RankingModule, ResultsModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
