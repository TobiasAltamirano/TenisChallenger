import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Partido } from './partido.entity';

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  edad: number;

  @Column()
  nacionalidad: string;

  @Column()
  ranking: number;

  @Column({ default: 0 })
  partidosJugados: number;

  @Column({ default: 0 })
  partidosGanados: number;

  @Column({ default: 0 })
  partidosPerdidos: number;

  @OneToMany(() => Partido, (partido) => partido.jugador1)
  partidosLocal: Partido[];

  @OneToMany(() => Partido, (partido) => partido.jugador2)
  partidosVisitante: Partido[];

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.apellido = '';
    this.edad = 0;
    this.nacionalidad = '';
    this.ranking = 0;
    this.partidosJugados = 0;
    this.partidosGanados = 0;
    this.partidosPerdidos = 0;
    this.partidosLocal = [];
    this.partidosVisitante = [];
  }
}
