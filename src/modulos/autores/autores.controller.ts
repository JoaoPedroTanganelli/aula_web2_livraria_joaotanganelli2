import { Controller, Get, Post, Body } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { get } from 'http';
import { Param } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { criarAutorDto } from './autores.dto';

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
  @Post('/criar-autor')
  criarAutor(@Body() bodyRequest: criarAutorDto) {
    return this.autoresService.criarAutor(bodyRequest);
  }
}
