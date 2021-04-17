import { Module } from '@nestjs/common';
import { DatabaseModule } from '@nx-base/backend-database/module/database.module';
import { QuizService } from '@nx-base/backend-database/service/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from '@nx-base/backend-database/entity/quiz/quiz.entity';
@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Quiz])],
  providers: [QuizService],
  exports: [TypeOrmModule.forFeature([Quiz]), QuizService],
})
export class QuizDbModule {}
