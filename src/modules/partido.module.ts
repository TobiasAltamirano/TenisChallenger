import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partido } from '../entities/partido.entity';
import { PartidoController } from 'src/controllers/partido.controller';
import { PartidoService } from 'src/services/partido.service';

@Module({
  imports: [TypeOrmModule.forFeature([Partido])],
  controllers: [PartidoController],
  providers: [PartidoService],
  exports: [TypeOrmModule], 
})
export class PartidoModule {}
