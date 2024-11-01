import { Module } from '@nestjs/common';
import { TeamsData } from './repositories/teams/teams.data';
import { TeamsRepositoryToken } from './repositories/teams/teams.repository';
import { DatabaseModule } from '../database/database.module';
import { PrismaService, PrismaServiceToken } from '../database/prisma.service';

@Module({
  exports: [
    TeamsData,
    {
      provide: TeamsRepositoryToken,
      useExisting: TeamsData,
    },
    {
      provide: PrismaServiceToken,
      useExisting: PrismaService,
    },
  ],
  providers: [
    TeamsData,
    {
      provide: TeamsRepositoryToken,
      useExisting: TeamsData,
    },
    {
      provide: PrismaServiceToken,
      useExisting: PrismaService,
    },
  ],
  imports: [DatabaseModule],
})
export class UtilsModule {}
