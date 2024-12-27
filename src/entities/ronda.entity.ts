import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Torneo } from './torneo.entity';
import { Partido } from './partido.entity';

@Entity()
export class Ronda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string; // "octavos", "cuartos", etc.

  @ManyToOne(() => Torneo, (torneo) => torneo.rondas)
  torneo: Torneo | null;

  @OneToMany(() => Partido, (partido) => partido.ronda)
  partidos: Partido[];

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.torneo = null;
    this.partidos = [];
  }
}