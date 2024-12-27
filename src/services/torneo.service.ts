import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Torneo } from '../entities/torneo.entity';

@Injectable()
export class TorneoService {
  constructor(
    @InjectRepository(Torneo)
    private readonly torneoRepository: Repository<Torneo>,
  ) {}

  findAll() {
    return this.torneoRepository.find({ relations: ['rondas'] });
  }

  findOne(id: number) {
    return this.torneoRepository.findOne({
      where: { id },
      relations: ['rondas'],
    });
  }

  create(torneoData: Partial<Torneo>) {
    const torneo = this.torneoRepository.create(torneoData);
    return this.torneoRepository.save(torneo);
  }

  update(id: number, torneoData: Partial<Torneo>) {
    return this.torneoRepository.update(id, torneoData);
  }

  remove(id: number) {
    return this.torneoRepository.delete(id);
  }
}
