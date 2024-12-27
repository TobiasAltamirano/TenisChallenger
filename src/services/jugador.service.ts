import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jugador } from '../entities/jugador.entity';

@Injectable()
export class JugadorService {
  constructor(
    @InjectRepository(Jugador)
    private readonly jugadorRepository: Repository<Jugador>,
  ) {}

  findAll() {
    return this.jugadorRepository.find();
  }

  findOne(id: number) {
    return this.jugadorRepository.findOne({ where: { id } });
  }

  create(jugadorData: Partial<Jugador>) {
    const jugador = this.jugadorRepository.create(jugadorData);
    return this.jugadorRepository.save(jugador);
  }

  update(id: number, jugadorData: Partial<Jugador>) {
    return this.jugadorRepository.update(id, jugadorData);
  }

  remove(id: number) {
    return this.jugadorRepository.delete(id);
  }
}
