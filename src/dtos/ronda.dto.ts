import { IsEnum, IsOptional, IsArray, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { Torneo } from '../entities/torneo.entity';
import { Partido } from '../entities/partido.entity';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RondaDto {
    @IsOptional()
    @IsInt()
    @ApiPropertyOptional({ type: Number })
    id?: number;

    @IsEnum(["octavos", "cuartos", "semifinal", "final"])
    @ApiProperty({ enum: ["octavos", "cuartos", "semifinal", "final"] })
    nombre: "octavos" | "cuartos" | "semifinal" | "final";

    @IsOptional()
    @ValidateNested()
    @Type(() => Torneo)
    @ApiPropertyOptional({ type: () => Torneo })
    torneo?: Torneo | null;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Partido)
    @ApiPropertyOptional({ type: [Partido] })
    partidos?: Partido[];
}

export class PartialRondaDto extends PartialType(RondaDto) {}