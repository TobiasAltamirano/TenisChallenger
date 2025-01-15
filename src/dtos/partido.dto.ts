import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { Jugador } from '../entities/jugador.entity';
import { Ronda } from '../entities/ronda.entity';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PartidoDto {
    @IsOptional()
    @IsInt()
    @ApiPropertyOptional({ description: 'ID del partido' })
    id?: number;

    @IsDate()
    @Type(() => Date)
    @ApiProperty({ description: 'Fecha del partido' })
    fecha: Date;

    @IsOptional()
    @Type(() => Jugador)
    @ApiPropertyOptional({ description: 'Jugador 1' })
    jugador1?: Jugador;

    @IsOptional()
    @Type(() => Jugador)
    @ApiPropertyOptional({ description: 'Jugador 2' })
    jugador2?: Jugador;

    @IsInt()
    @ApiProperty({ description: 'Puntaje del Jugador 1' })
    puntajeJugador1: number;

    @IsInt()
    @ApiProperty({ description: 'Puntaje del Jugador 2' })
    puntajeJugador2: number;

    @IsOptional()
    @Type(() => Jugador)
    @ApiPropertyOptional({ description: 'Ganador del partido' })
    ganador?: Jugador;

    @IsOptional()
    @Type(() => Ronda)
    @ApiPropertyOptional({ description: 'Ronda del partido' })
    ronda?: Ronda;
}

export class UpdatePartidoDto extends PartialType(PartidoDto) {}