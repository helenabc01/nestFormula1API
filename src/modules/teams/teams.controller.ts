import { TeamsEntity } from '../utils/entities/teams.entity';
import { TeamsDTO } from '../utils/repositories/teams/teams.dto';
import { TeamsService } from './teams.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async getAll(@Res() res: Response): Promise<Response<TeamsEntity[]>> {
    try {
      const teams = await this.teamsService.getAll();
      return res.status(HttpStatus.OK).send(teams);
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }

  @Get(':id')
  async getById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<Response> {
    console.log(typeof id);
    try {
      const team = await this.teamsService.getById(Number(id));
      return res.status(HttpStatus.OK).send(team);
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }

  @Post()
  async create(@Body() data: TeamsDTO) {
    return await this.teamsService.create(data);
  }

  @Delete(':id')
    try {
      const result = await this.teamsService.delete(id);
      if (result) {
        return { message: 'Equipe deletada com sucesso' };
      } else {
        throw new HttpException('Falha ao deletar a equipe');
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
