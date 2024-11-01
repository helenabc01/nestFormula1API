import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { UtilsModule } from './modules/utils/utils.module';
import { TeamsModule } from './modules/teams/teams.module';

@Module({
  imports: [DatabaseModule, UtilsModule, TeamsModule],
})
export class AppModule {}
