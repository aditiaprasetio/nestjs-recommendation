import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import dotenv = require('dotenv');

const { parsed } = dotenv.config({
  path:
    process.cwd() +
    '/.env' +
    (process.env.NODE_ENV ? '.' + process.env.NODE_ENV : ''),
});
process.env = { ...process.env, ...parsed };

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) getSuggestion', () => {
    return request(app.getHttpServer())
      .get('/recommendation/custom/getSuggestion')
      .expect(200);
  });

  it('/ (POST) createRecommendation', () => {
    return request(app.getHttpServer())
      .get('/recommendation')
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
