import { SubModuleEnum } from '@app/enums';
import { IEffectedSubEntity } from '@app/interfaces';
import { IssueCode, IssueIdType } from '@app/types';
import { Document, model, Schema } from 'mongoose';
import { TemplateRepository } from '../repositories';
import { ModelNameEnum } from './model-name.enum';
import { TemplateDocument } from './template.model';

export interface IssueDocument extends Document {
  id: IssueIdType;
  code: IssueCode;
  volume: number;
  reporter: SubModuleEnum;
  effectedSubEntities: IEffectedSubEntity[];
  template: {
    templateId: TemplateDocument['_id'];
    variables: object;
  };
  lastUpdated?: Date;
  created?: Date;
}

const IssueSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
      unique: true,
      index: true,
    },
    code: { type: String, require: true },
    volume: {
      type: Number,
      required: false,
    },
    reporter: {
      type: String,
      required: true,
    },
    effectedSubEntities: {
      type: Array<{
        type: string;
        id: string;
      }>,
      required: true,
    },
    template: {
      type: {
        templateId: {
          type: Schema.Types.ObjectId,
          ref: ModelNameEnum.Template,
          validate: {
            validator: async (_id) => await TemplateRepository.exist({ _id }),
          },
        },
        variables: Object,
      },
      required: true,
      _id: false,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'created',
      updatedAt: 'lastUpdated',
    },
  },
);

export const IssueModel = model<IssueDocument>(
  ModelNameEnum.Issue,
  IssueSchema,
  'issues',
);
