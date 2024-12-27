import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TorneoService } from '../services/torneo.service';

@Controller('torneos')
export class TorneoController {
  constructor(private readonly torneoService: TorneoService) {}

  @Get()
  findAll() {
    return this.torneoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.torneoService.findOne(id);
  }

  @Post()
  create(@Body() torneoData: any) {
    return this.torneoService.create(torneoData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() torneoData: any) {
    return this.torneoService.update(id, torneoData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.torneoService.remove(id);
  }
}
