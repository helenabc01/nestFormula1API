import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UtilsModule } from '../utils/utils.module';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService],
  imports: [DatabaseModule, UtilsModule],
})
export class TeamsModule {}
4