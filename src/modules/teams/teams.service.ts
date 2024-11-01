import { TeamsEntity } from '../utils/entities/teams.entity';
import { TeamsDTO } from '../utils/repositories/teams/teams.dto';
import {
  TeamsRepository,
  TeamsRepositoryToken,
} from '../utils/repositories/teams/teams.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
  constructor(
    @Inject(TeamsRepositoryToken)
    private readonly teamsRepository: TeamsRepository,
  ) {}

  async getAll(): Promise<TeamsEntity[]> {
    return await this.teamsRepository.getAll();
  }
  async getById(id: number): Promise<TeamsEntity> {
    return await this.teamsRepository.getById(id);
  }
  async create(data: TeamsDTO): Promise<TeamsEntity> {
    return await this.teamsRepository.create(data);
  }
  async delete(id: number): Promise<boolean> {
    return await this.teamsRepository.delete(id);
  }
}
