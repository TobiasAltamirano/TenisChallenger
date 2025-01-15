import { Module } from '@nestjs/common';
import { JugadorModule } from './modules/jugador.module';
import { PartidoModule } from './modules/partido.module';
import { TorneoModule } from './modules/torneo.module';
import { RondaModule } from './modules/ronda.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    JugadorModule,
    PartidoModule,
    TorneoModule,
    RondaModule,  
  ],
  
})
export class AppModule {}
