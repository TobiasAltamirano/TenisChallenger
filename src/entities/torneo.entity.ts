import { Entity, PrimaryGeneratedColumn, Column, OneToMany, IsNull } from 'typeorm';
import { Ronda } from './ronda.entity';
import { IsNumber, IsDate, IsString } from 'class-validator';
@Entity()
export class Torneo {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  nombre: string;

  @Column()
  @IsDate()
  fechaInicio: Date;

  @Column()
  fechaFin: Date;

  @Column({
    type: "enum",
    enum: ["en progreso", "finalizado", "futuro"],
    default: "futuro"
  })
  estado: string; 

  @OneToMany(() => Ronda, (ronda) => ronda.torneo)
  rondas: Ronda[];


}