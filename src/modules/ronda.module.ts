import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ronda } from '../entities/ronda.entity';
import { RondaController } from 'src/controllers/ronda.controller';
import { RondaService } from 'src/services/ronda.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ronda])],
  controllers: [RondaController],
  providers: [RondaService],
  exports: [TypeOrmModule], 
})
export class RondaModule {}
