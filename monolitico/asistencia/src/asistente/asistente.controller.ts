import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AsistenteService } from './asistente.service';
import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { UpdateAsistenteDto } from './dto/update-asistente.dto';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asistenteService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAsistenteDto: UpdateAsistenteDto) {
    return this.asistenteService.update(id, updateAsistenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asistenteService.remove(id);
  }
}
