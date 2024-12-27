import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ronda } from '../entities/ronda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ronda])],
  exports: [TypeOrmModule], 
})
export class RondaModule {}
