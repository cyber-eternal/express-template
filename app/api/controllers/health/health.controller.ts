import { AbstractController } from '../abstract.controller';
import { HealthService } from './health.service';
import { HttpStatus } from '@app/api/enums';
import { Request, Response } from 'express';

export class HealthController extends AbstractController {
  private readonly healthService = new HealthService();

  initRoutes() {
    this.router.get('/health-check', this.healthCheck.bind(this));
  }

  private async healthCheck(req: Request, res: Response) {
    return res.status(HttpStatus.OK).json(this.healthService.health());
  }
}
