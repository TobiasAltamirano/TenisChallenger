import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Jugador } from './jugador.entity';
import { Ronda } from './ronda.entity';

@Entity()
export class Partido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Jugador, (jugador) => jugador.partidosLocal)
  jugador1: Jugador | null;

  @ManyToOne(() => Jugador, (jugador) => jugador.partidosVisitante)
  jugador2: Jugador | null;

  @Column()
  puntajeJugador1: number;

  @Column()
  puntajeJugador2: number;

  @ManyToOne(() => Jugador, { nullable: true })
  ganador: Jugador | null;

  @ManyToOne(() => Ronda, (ronda) => ronda.partidos)
  ronda: Ronda | null;

  constructor() {
    this.id = 0;
    this.fecha = new Date();
    this.jugador1 = null;
    this.jugador2 = null;
    this.puntajeJugador1 = 0;
    this.puntajeJugador2 = 0;
    this.ganador = null;
    this.ronda = null;
  }
}
