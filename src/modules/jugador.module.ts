import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jugador } from '../entities/jugador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jugador])],
  exports: [TypeOrmModule],
})
export class JugadorModule {}
