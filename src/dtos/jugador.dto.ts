import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';


export class JugadorDto {
    @ApiProperty()
    @IsString()
    nombre: string;

    @ApiProperty({ default: 'https://www.gravatar.com/avatar/'})
    @IsString()
    avatar: string;

    @ApiProperty()
    @IsString()
    apellido: string;

    @ApiProperty({
        uniqueItems: true // esto hace que no se repitan los rankings
    })
    @IsNumber()
    @Min(1)
    ranking: number;

    @ApiProperty()
    @IsString()
    descripcion: string;

    @ApiProperty()
    @IsNumber()
    @Min(0)
    puntos: number;

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

export class UpdateJugadorDto extends PartialType(JugadorDto) {}