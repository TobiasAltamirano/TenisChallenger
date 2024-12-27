import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PartidoService } from '../services/partido.service';

@Controller('partidos')
export class PartidoController {
  constructor(private readonly partidoService: PartidoService) {}

  @Get()
  findAll() {
    return this.partidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.partidoService.findOne(id);
  }

  @Post()
  create(@Body() partidoData: any) {
    return this.partidoService.create(partidoData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() partidoData: any) {
    return this.partidoService.update(id, partidoData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.partidoService.remove(id);
  }
}
