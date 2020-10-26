import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecommendationController } from './recommendation.controller';
import { RecommendationService } from './recommendation.service';
import { Recommendation } from './recommendation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recommendation])],

  providers: [RecommendationService],

  controllers: [RecommendationController],
})
export class RecommendationModule {}
