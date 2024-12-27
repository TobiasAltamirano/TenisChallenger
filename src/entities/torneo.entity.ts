import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ronda } from './ronda.entity';

@Entity()
export class Torneo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fechaInicio: Date;

  @Column()
  fechaFin: Date;

  @Column()
  estado: string; // "en progreso", "finalizado", "futuro"

  @OneToMany(() => Ronda, (ronda) => ronda.torneo)
  rondas: Ronda[];

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.fechaInicio = new Date();
    this.fechaFin = new Date();
    this.estado = '';
    this.rondas = [];
  }
}