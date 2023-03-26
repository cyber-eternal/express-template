import express from 'express';
import { IControllerBase } from '@api/interfaces';

export abstract class AbstractController implements IControllerBase {
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  abstract initRoutes(): void;
}
