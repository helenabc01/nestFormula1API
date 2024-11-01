import { TeamsDTO } from './teams.dto';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { TeamsRepository } from './teams.repository';
import {
  PrismaService,
  PrismaServiceToken,
} from 'src/modules/database/prisma.service';
import { TeamsEntity } from '../../entities/teams.entity';

@Injectable()
export class TeamsData implements TeamsRepository {
  constructor(
    @Inject(PrismaServiceToken)
    private readonly prismaService: PrismaService,
  ) {}

  async getAll(): Promise<TeamsDTO[]> {
    return await this.prismaService.teams.findMany();
  }

  async getById(id: number): Promise<TeamsDTO> {
    const teamsExists = await this.prismaService.teams.findFirst({
      where: {
        id,
      },
      select: { id: true },
    });

    if (!teamsExists) {
      throw new NotFoundException('Team not founded');
    }
    return await this.prismaService.teams.findFirst({
      where: { id },
    });
  }
  async create(data: TeamsDTO): Promise<TeamsDTO> {
    const teamsExists = await this.prismaService.teams.findFirst({
      where: {
        id: data.id,
      },
    });
    if (teamsExists) {
      throw new Error('Equipe já existe');
    }
    const teams = await this.prismaService.teams.create({ data });
    return teams;
  }

  async delete(id: number): Promise<boolean> {
    const teamsExists = await this.prismaService.teams.findFirst({
      where: {
        id,
      },
    });

    if (!teamsExists) {
      throw new Error('Equipe não encontrada');
    }

    await this.prismaService.teams.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async update(id: number, data: TeamsDTO): Promise<TeamsEntity> {
    const teamsExists = await this.prismaService.teams.findFirst({
      where: {
        id,
      },
    });
    if (!teamsExists) {
      throw new Error('Equipe não encontrada');
    }

    return await this.prismaService.teams.update({
      data,
      where: {
        id,
      },
    });
  }
}
