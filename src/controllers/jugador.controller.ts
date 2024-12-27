import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { JugadorService } from '../services/jugador.service';

@Controller('jugadores')
export class JugadorController {
  constructor(private readonly jugadorService: JugadorService) {}

  @Get()
  findAll() {
    return this.jugadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.jugadorService.findOne(id);
  }

  @Post()
  create(@Body() jugadorData: any) {
    return this.jugadorService.create(jugadorData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() jugadorData: any) {
    return this.jugadorService.update(id, jugadorData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.jugadorService.remove(id);
  }
}
