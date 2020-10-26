import { Controller, Get, HttpException } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Recommendation } from './recommendation.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { RecommendationService } from './recommendation.service';

@Crud({
  model: {
    type: Recommendation,
  },
  params: {
    id: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
  routes: {
    exclude: [
      'createManyBase',
      'replaceOneBase',
      'updateOneBase',
      'getOneBase',
    ],
  },
})
@ApiTags('Recommendation')
@Controller('recommendation')
@ApiBearerAuth()
export class RecommendationController
  implements CrudController<Recommendation> {
  constructor(public service: RecommendationService) {}

  get base(): CrudController<Recommendation> {
    return this;
  }

  @Get('custom/getSuggestion')
  getSuggestedRecommendation() {
    try {
      return this.service.getSuggestedRecommendation();
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
