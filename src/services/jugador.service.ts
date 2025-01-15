import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jugador } from '../entities/jugador.entity';
import { JugadorDto } from 'src/dtos/jugador.dto';

@Injectable()
export class JugadorService {
  constructor(
    @InjectRepository(Jugador)
    private readonly jugadorRepository: Repository<Jugador>,
  ) {}

  async findAll() {
    return await this.jugadorRepository.find();
  }

  async findOne(id: number) {
    return await this.jugadorRepository.findOne({ where: { id } });
  }

  async findAllOrderedByRanking() {
    return await this.jugadorRepository.find({ order: { ranking: 'DESC' } });
  }

  



  async create(jugadorData: JugadorDto) {
    let jugadores = await this.findAll();
    jugadorData.ranking = 0;

    for (let jugador of jugadores) {
      if (jugador.nombre == jugadorData.nombre && jugador.apellido == jugadorData.apellido) {
        return "Jugador ya existente";
      }
      if(jugador.puntos <= jugadorData.puntos){
        jugadorData.ranking += 1;
        // de esta forma, lo maximo que puede ser el ranking es la cantidad de jugadores
      }
    }



    const data = {
      ...jugadorData,
      partidosGanados: 0,
      partidosJugados: 0,
      partidosPerdidos: 0,
    };
    const jugador = this.jugadorRepository.create(data);
    
    return this.jugadorRepository.save(jugador);
  }

  async update(id: number, jugadorData: Partial<Jugador>) {
    return await this.jugadorRepository.update(id, jugadorData);
  }

  async remove(id: number) {
    return await this.jugadorRepository.delete(id);
  }
}
