import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Torneo } from './torneo.entity';
import { Partido } from './partido.entity';

@Entity()
export class Ronda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: ["octavos", "cuartos", "semifinal", "final"],
    default: "cuartos"
  })

  nombre: string; // "octavos", "cuartos", "semifinal", "final"

  @ManyToOne(() => Torneo, (torneo) => torneo.rondas)
  torneo: Torneo | null;

  @OneToMany(() => Partido, (partido) => partido.ronda)
  partidos: Partido[];

}