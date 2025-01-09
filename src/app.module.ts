import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorModule } from './modules/jugador.module';
import { PartidoModule } from './modules/partido.module';
import { TorneoModule } from './modules/torneo.module';
import { RondaModule } from './modules/ronda.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '55rbxF6XUpjdVHD',
      database: 'torneo_tenis',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    JugadorModule,
    PartidoModule,
    TorneoModule,
    RondaModule,  
  ],
  
})
export class AppModule {}
