import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import _ from 'lodash';
import * as packages from '../package.json';

export function SwaggerBuilder(app: INestApplication, config: any): any {
  if (!config.STAGE) config.STAGE = 'LOCAL';
  else config.STAGE = config.STAGE.toUpperCase();

  const option: any = new DocumentBuilder()
    .setTitle(packages.name)
    .setDescription(packages.description)
    .addBearerAuth()
    .setVersion(`v${packages.version}-${config.STAGE.toLowerCase()}`)
    // .addServer('http')
    // .addServer('https')
    .build();

  const result = SwaggerModule.createDocument(app, option);

  // for (const key of Object.keys(result.paths)) {
  //   for (const keyMethod of Object.keys(result.paths[key])) {
  //     if (
  //       result.paths[key][keyMethod].parameters &&
  //       Array.isArray(result.paths[key][keyMethod].parameters)
  //     ) {
  //       result.paths[key][keyMethod].parameters.push({
  //         type: 'string',
  //         name: 'realm',
  //         required: true,
  //         in: 'header',
  //       });
  //     }
  //   }
  // }

  return result;
}
