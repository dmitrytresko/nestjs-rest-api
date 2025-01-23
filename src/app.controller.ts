import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Check server health',
  })
  @Get('health')
  @HttpCode(200)
  health() {
    return this.appService.checkHealth();
  }
}
