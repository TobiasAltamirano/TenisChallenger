import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Torneo } from '../entities/torneo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Torneo])],
  exports: [TypeOrmModule], 
})
export class TorneoModule {}
