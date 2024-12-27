import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Torneo } from '../entities/torneo.entity';
import { TorneoController } from 'src/controllers/torneo.controller';
import { TorneoService } from 'src/services/torneo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Torneo])],
  controllers: [TorneoController],
  providers: [TorneoService],
  exports: [TypeOrmModule], 
})
export class TorneoModule {}
