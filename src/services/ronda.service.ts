import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ronda } from '../entities/ronda.entity';

@Injectable()
export class RondaService {
  constructor(
    @InjectRepository(Ronda)
    private readonly rondaRepository: Repository<Ronda>,
  ) {}

  findAll() {
    return this.rondaRepository.find({ relations: ['torneo', 'partidos'] });
  }

  findOne(id: number) {
    return this.rondaRepository.findOne({
      where: { id },
      relations: ['torneo', 'partidos'],
    });
  }

  create(rondaData: Partial<Ronda>) {
    const ronda = this.rondaRepository.create(rondaData);
    return this.rondaRepository.save(ronda);
  }

  update(id: number, rondaData: Partial<Ronda>) {
    return this.rondaRepository.update(id, rondaData);
  }

  remove(id: number) {
    return this.rondaRepository.delete(id);
  }
}
