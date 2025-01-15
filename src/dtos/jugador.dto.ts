import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';


export class CreateJugadorDto {
    @ApiProperty()
    @IsString()
    nombre: string;

    @ApiProperty()
    @IsString()
    apellido: string;

    @ApiProperty()
    @IsNumber()
    @Min(0)
    ranking: number;

    @ApiProperty({ default: 0 })
    @IsNumber()
    @IsOptional()
    partidosJugados?: number;

    @ApiProperty({ default: 0 })
    @IsNumber()
    @IsOptional()
    partidosGanados?: number;

    @ApiProperty({ default: 0 })
    @IsNumber()
    @IsOptional()
    partidosPerdidos?: number;
}

export class UpdateJugadorDto extends PartialType(CreateJugadorDto) {}