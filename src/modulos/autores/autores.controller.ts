import { Controller, Get } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { get } from 'http';
import { Param } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/listar-autores')
  listarAutores() {
    return this.autoresService.listarAutores();
  }
  @Get('/listar-autores/:id')
  listarAutorPorId(@Param('id, parseIntpipe') id: number) {
    return this.autoresService.listarAutor(id);
  }
}
