import { Expose, Type } from 'class-transformer';
import { IsDate, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Ronda } from '../entities/ronda.entity';

export class TorneoDto {
    @Expose() 
    @IsNumber()
    @IsOptional()
    id?: number;

    @Expose()
    @IsString()
    nombre: string;

    @Expose()
    @IsDate()
    fechaInicio: Date;

    @Expose()
    @IsDate()
    @IsOptional()
    fechaFin?: Date;

    @Expose()
    @IsEnum(["en progreso", "finalizado", "futuro"])
    estado: string;

    @Expose()
    @ValidateNested({ each: true })
    @Type(() => Ronda)
    @IsOptional()
    rondas?: Ronda[];
}