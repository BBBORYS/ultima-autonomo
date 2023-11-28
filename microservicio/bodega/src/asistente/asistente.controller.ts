import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AsistenteService } from './asistente.service';
import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { Request } from 'express';
import { Req } from '@nestjs/common';

@Controller('asistente')
export class AsistenteController {
  constructor(private readonly asistenteService: AsistenteService) {}

  @Post()
  create(@Body() createAsistenteDto: CreateAsistenteDto) {
    return this.asistenteService.create(createAsistenteDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.asistenteService.findAll(request);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asistenteService.remove(id);
  }
}