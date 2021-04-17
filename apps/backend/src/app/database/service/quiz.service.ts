import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Quiz } from '@nx-base/backend-database/entity/quiz/quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private repository: Repository<Quiz>
  ) {}

  async findAll(): Promise<Quiz[]> {
    return this.repository.find();
  }
}
