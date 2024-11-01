//instancia de interface do modulo sendo a chave de acesso

import { TeamsEntity } from '../../entities/teams.entity';
import { BaseRepository } from '../base.repositories';

export interface TeamsRepository extends BaseRepository<TeamsEntity> {}

export const TeamsRepositoryToken = Symbol('TeamsRepository');
