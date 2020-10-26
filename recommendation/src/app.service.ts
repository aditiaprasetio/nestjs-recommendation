import { Injectable } from '@nestjs/common';
import * as packages from '../package.json';

@Injectable()
export class AppService {
  root(): string {
    return (
      packages.name +
      ' (api v' +
      packages.version +
      '-' +
      (process.env.STAGE ? process.env.STAGE : 'development') +
      ')'
    );
  }
}
