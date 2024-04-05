import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-visitors-count')
  getVisitorsCount(): number {
    return this.appService.getVisitorsCount();
  }
}
