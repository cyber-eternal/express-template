import { IssueDocument, IssueModel } from '../models';
import AbstractRepository from './abstract.repository';

class IssueRepositoryClass extends AbstractRepository<IssueDocument> {
  constructor() {
    super(IssueModel);
  }
}

export const IssueRepository = new IssueRepositoryClass();
