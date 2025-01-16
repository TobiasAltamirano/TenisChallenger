import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jugador } from '../entities/jugador.entity';
import { JugadorController } from 'src/controllers/jugador.controller';
import { JugadorService } from 'src/services/jugador.service';


@Module({
  imports: [TypeOrmModule.forFeature([Jugador]),

],
  controllers: [JugadorController], 
  providers: [JugadorService],
  exports: [TypeOrmModule],
})
export class JugadorModule {}
