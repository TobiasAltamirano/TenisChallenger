import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, UseInterceptors, UploadedFile, BadRequestException, HttpException, Logger } from '@nestjs/common';
import { JugadorService } from '../services/jugador.service';
import { JugadorDto, UpdateJugadorDto } from 'src/dtos/jugador.dto';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";

@Controller('jugadores')
export class JugadorController {
  constructor(private readonly jugadorService: JugadorService) {}

  private readonly logger = new Logger(JugadorController.name);

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
  async create(@Body() jugadorData: JugadorDto, @UploadedFile() file: Express.Multer.File) {
      try {
          this.logger.log('File:', file); // undefined
          if (!file) {
              throw new BadRequestException('File is required');
          }
          
          jugadorData.avatar = file.filename;
          this.logger.log('Avatar:', jugadorData.avatar);
          return await this.jugadorService.create(jugadorData);
      } catch (error) {
          this.logger.error('Error:', error.message);
          throw new HttpException('Failed to create jugador: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }
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
