import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getVisitorsCount(): number {
    return 2;
  }
}
