import { TranslationLanguageEnum } from '@app/enums';
import { IssueCode } from '@app/types';
import { Document, model, Schema } from 'mongoose';
import { ModelNameEnum } from './model-name.enum';

export type TranslationsType = {
  [lang in TranslationLanguageEnum]: string | undefined;
};

export interface TemplateDocument extends Document {
  issueCode: IssueCode;
  requiredVariables: string[];
  translations: TranslationsType;
}

const TemplateSchema = new Schema<TemplateDocument>(
  {
    issueCode: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    requiredVariables: {
      type: [String],
      required: false,
    },
    translations: {
      type: Map,
      of: String,
      required: true,
      _id: false,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

// TemplateSchema.pre('save', function (next) {
//   if (!this.isNew) {
//     next();
//     return;
//   }

//   autoIncrementModelID(ModelNameEnum.Template, this, next);
// });

export const TemplateModel = model<TemplateDocument>(
  ModelNameEnum.Template,
  TemplateSchema,
  'templates',
);
