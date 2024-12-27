import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partido } from '../entities/partido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partido])],
  exports: [TypeOrmModule], 
})
export class PartidoModule {}
