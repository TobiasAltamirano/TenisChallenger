import { Module } from '@nestjs/common';
import { JugadorModule } from './modules/jugador.module';
import { PartidoModule } from './modules/partido.module';
import { TorneoModule } from './modules/torneo.module';
import { RondaModule } from './modules/ronda.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true,
      envFilePath: '.env',
      ignoreEnvFile: false,
      expandVariables: true
     }),
    DatabaseModule,
    JugadorModule,
    PartidoModule,
    TorneoModule,
    RondaModule,  
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
    }),
  ],
  
})
export class AppModule {}
