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
  avatar: string;

  @Column()
  ranking?: number;

  @Column()
  puntos: number;

  @Column({ default: 0 })
  partidosJugados: number;

  @Column({ default: 0 })
  partidosGanados: number;

  @Column({ default: 0 })
  partidosPerdidos: number;

  @OneToMany(() => Partido, (partido) => partido.jugador1)
  partidosLocal?: Partido[];

  @OneToMany(() => Partido, (partido) => partido.jugador2)
  partidosVisitante?: Partido[];


}
