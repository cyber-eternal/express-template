import { FilterQuery, Model, PipelineStage } from 'mongoose';

export default abstract class AbstractRepository<DocumentType> {
  private readonly model: Model<DocumentType>;

  constructor(model: Model<DocumentType>) {
    if (!model) throw new Error('Model has not provided');
    this.model = model;
  }

  public exist(filters: Partial<DocumentType> = {}) {
    return this.model.exists(filters);
  }

  public insertDocuments(dataArray: Partial<DocumentType>[]) {
    return this.model.insertMany(dataArray);
  }

  public async insertDocument(data: Partial<DocumentType>) {
    const modelData = await this.model.create(data);
    return modelData.save();
  }

  public async getDocuments(
    filters: FilterQuery<DocumentType> = {},
    limit = 10,
    start = 0,
  ) {
    return this.model.find(filters).limit(limit).skip(start);
  }

  public async getDocument(filters: FilterQuery<DocumentType> = {}) {
    return this.model.findOne(filters);
  }

  public upsertDocument(
    updateCriteria: FilterQuery<DocumentType>,
    document: Partial<DocumentType>,
  ) {
    return this.model.updateOne(
      updateCriteria,
      { $set: document },
      { upsert: true },
    );
  }

  public updateDocuments(
    updateCriteria: FilterQuery<DocumentType>,
    updatedFields: Partial<DocumentType>,
  ) {
    return this.model.updateMany(
      updateCriteria,
      { $set: updatedFields },
      { multi: true },
    );
  }

  public async deleteDocuments(filters: FilterQuery<DocumentType> = {}) {
    return this.model.deleteMany(filters);
  }

  public async executePipelines<T>(
    pipelines: PipelineStage[],
    limit = 10,
    start = 0,
  ) {
    return this.model.aggregate<T>(pipelines).limit(limit).skip(start);
  }

  public bulkWrite(documents: Partial<DocumentType>[], uniqueKey) {
    return this.model.bulkWrite(
      documents.map((doc) => ({
        updateOne: {
          filter: { [uniqueKey]: doc[uniqueKey] },
          update: doc,
          upsert: true,
        },
      })),
    );
  }
}
