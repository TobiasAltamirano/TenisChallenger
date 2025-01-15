import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, UseInterceptors } from '@nestjs/common';
import { JugadorService } from '../services/jugador.service';
import { JugadorDto, UpdateJugadorDto } from 'src/dtos/jugador.dto';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { UploadedFile } from "@nestjs/common";

@Controller('jugadores')
export class JugadorController {
  constructor(private readonly jugadorService: JugadorService) {}

  @Get()
  findAll() {
    return this.jugadorService.findAllOrderedByRanking();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.jugadorService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('avatar', {
      storage: diskStorage({
          destination: './images',
          filename: (req, file, callback) => {
              const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
              const ext = extname(file.originalname);
              callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
          },
      }),
  }))
  create(@Body() jugadorData: JugadorDto) {
    return this.jugadorService.create(jugadorData);
  }

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  update(@Param('id') id: number, @Body() jugadorData: UpdateJugadorDto) {
    return this.jugadorService.update(id, jugadorData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204
  remove(@Param('id') id: number) {
    return this.jugadorService.remove(id);
  }
}
function diskStorage(arg0: { destination: string; filename: (req: any, file: any, callback: any) => void; }): any {
  throw new Error('Function not implemented.');
}

