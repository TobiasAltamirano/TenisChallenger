import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partido } from '../entities/partido.entity';

@Injectable()
export class PartidoService {
  constructor(
    @InjectRepository(Partido)
    private readonly partidoRepository: Repository<Partido>,
  ) {}

  findAll() {
    return this.partidoRepository.find({
      relations: ['jugador1', 'jugador2', 'ganador', 'ronda'],
    });
  }

  findOne(id: number) {
    return this.partidoRepository.findOne({
      where: { id },
      relations: ['jugador1', 'jugador2', 'ganador', 'ronda'],
    });
  }

  create(partidoData: Partial<Partido>) {
    const partido = this.partidoRepository.create(partidoData);
    return this.partidoRepository.save(partido);
  }

  update(id: number, partidoData: Partial<Partido>) {
    return this.partidoRepository.update(id, partidoData);
  }

  remove(id: number) {
    return this.partidoRepository.delete(id);
  }
}
