import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RondaService } from '../services/ronda.service';

@Controller('rondas')
export class RondaController {
  constructor(private readonly rondaService: RondaService) {}

  @Get()
  findAll() {
    return this.rondaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rondaService.findOne(id);
  }

  @Post()
  create(@Body() rondaData: any) {
    return this.rondaService.create(rondaData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() rondaData: any) {
    return this.rondaService.update(id, rondaData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.rondaService.remove(id);
  }
}
