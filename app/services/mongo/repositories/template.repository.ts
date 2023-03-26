import { TemplateDocument, TemplateModel } from '../models';
import AbstractRepository from './abstract.repository';

class TemplateRepositoryClass extends AbstractRepository<TemplateDocument> {
  constructor() {
    super(TemplateModel);
  }
}

export const TemplateRepository = new TemplateRepositoryClass();
