import { Injectable, InternalServerErrorException } from '@nestjs/common';
import type { drizzleDB } from 'src/db/types/drizzleDB';
import { autoresTabela } from 'src/db/schemas/autores';
import { DRIZZLE } from 'src/db/database/database.constants';
import { Inject } from '@nestjs/common';

@Injectable()
export class AutoresRepository {
  constructor(@Inject(DRIZZLE) private readonly db: drizzleDB) {}

  async listarAutores() {
    try {
      return this.db.select().from(autoresTabela);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar autores');
    }
  }
}
