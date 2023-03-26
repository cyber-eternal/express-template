import { TemplateRepository } from '../repositories';
import '@root/set-environment';
import {
  ARIIssueCodeEnum,
  StaticDataIssueCodeEnum,
  TranslationLanguageEnum,
} from '@app/enums';

export default async () => {
  // Insert ARI coverage issue templates
  await TemplateRepository.bulkWrite(
    [
      {
        requiredVariables: ['volume'],
        issueCode: ARIIssueCodeEnum.IS_CLOSED,
        translations: {
          [TranslationLanguageEnum.en]:
            'Is open is set to false for __volume% of next year',
        },
      },
      {
        requiredVariables: ['volume'],
        issueCode: ARIIssueCodeEnum.IS_CLOSED_ON_ARRIVAL,
        translations: {
          [TranslationLanguageEnum.en]:
            'Is closed on arrival set to false for __volume% of next year',
        },
      },
      {
        requiredVariables: ['volume'],
        issueCode: ARIIssueCodeEnum.IS_CLOSED_ON_DEPARTURE,
        translations: {
          [TranslationLanguageEnum.en]:
            'Is closed on departure set to false for __volume% of next year',
        },
      },
      {
        requiredVariables: ['volume', 'ratePlanCode', 'roomCode', 'occupancy'],
        issueCode: ARIIssueCodeEnum.MISSING_OCCUPANCIES_PRICES,
        translations: {
          [TranslationLanguageEnum.en]:
            "While room __roomCode is defined to have a max occupancy of __occupancy pax, rate plan __ratePlanCode doesn't have prices for __occupancy pax for __volume% days of next year",
        },
      },
      {
        requiredVariables: ['volume', 'ratePlanCode', 'roomCode'],
        issueCode: ARIIssueCodeEnum.MISSING_CHILDREN_PRICES,
        translations: {
          [TranslationLanguageEnum.en]:
            "While room __roomCode is defined to have children occupancy, rate plan __ratePlanCode doesn't have prices for children for __volume% days of next year",
        },
      },
      {
        requiredVariables: ['volume', 'ratePlanCode', 'roomCode'],
        issueCode: ARIIssueCodeEnum.MISSING_PRICES,
        translations: {
          [TranslationLanguageEnum.en]:
            'No prices of any kind were set for room __roomCode rate plan __ratePlanCode for __volume% of the next year',
        },
      },
      {
        requiredVariables: [
          'volume',
          'ruleLimitMin',
          'ruleLimitMax',
          'ratePlanCode',
          'roomCode',
        ],
        issueCode: ARIIssueCodeEnum.MIN_LOS_MIN,
        translations: {
          [TranslationLanguageEnum.en]:
            'Min value of minLOS is __volume for room __roomCode rate plan __ratePlanCode and it is out than of the rule limits min: __ruleLimitMin, max: __ruleLimitMax',
        },
      },
      {
        requiredVariables: [
          'volume',
          'ruleLimitMin',
          'ruleLimitMax',
          'ratePlanCode',
          'roomCode',
        ],
        issueCode: ARIIssueCodeEnum.MIN_LOS_MAX,
        translations: {
          [TranslationLanguageEnum.en]:
            'Max value of minLOS is __volume for room __roomCode rate plan __ratePlanCode  and it is out than of the rule limits min: __ruleLimitMin, max: __ruleLimitMax',
        },
      },
      {
        requiredVariables: [
          'volume',
          'ruleLimitMin',
          'ruleLimitMax',
          'ratePlanCode',
          'roomCode',
        ],
        issueCode: ARIIssueCodeEnum.MIN_LOS_AVG,
        translations: {
          [TranslationLanguageEnum.en]:
            'Average value of minLOS is __volume for room __roomCode rate plan __ratePlanCode  and it is out than of the rule limits min: __ruleLimitMin, max: __ruleLimitMax',
        },
      },
      {
        requiredVariables: [
          'volume',
          'ruleLimitMin',
          'ruleLimitMax',
          'ratePlanCode',
          'roomCode',
        ],
        issueCode: ARIIssueCodeEnum.MIN_LOS_MED,
        translations: {
          [TranslationLanguageEnum.en]:
            'Median value of minLOS is __volume for room __roomCode rate plan __ratePlanCode  and it is out than of the rule limits min: __ruleLimitMin, max: __ruleLimitMax',
        },
      },
      {
        requiredVariables: [
          'volume',
          'ruleLimitMin',
          'ruleLimitMax',
          'ratePlanCode',
          'roomCode',
        ],
        issueCode: ARIIssueCodeEnum.MAX_LOS_MIN,
        translations: {
          [TranslationLanguageEnum.en]:
            'Min value of maxLOS is __volume for room __roomCode rate plan __ratePlanCode  and it is out than of the rule limits min: __ruleLimitMin, max: __ruleLimitMax',
        },
      },
      {
        requiredVariables: [
          'volume',
          'ruleLimitMin',
          'ruleLimitMax',
          'ratePlanCode',
          'roomCode',
        ],
        issueCode: ARIIssueCodeEnum.MAX_LOS_MAX,
        translations: {
          [TranslationLanguageEnum.en]:
            'Max value of maxLOS is __volume for room __roomCode rate plan __ratePlanCode  and it is out than of the rule limits min: __ruleLimitMin, max: __ruleLimitMax',
        },
      },
      {
        requiredVariables: [
          'volume',
          'ruleLimitMin',
          'ruleLimitMax',
          'ratePlanCode',
          'roomCode',
        ],
        issueCode: ARIIssueCodeEnum.MAX_LOS_AVG,
        translations: {
          [TranslationLanguageEnum.en]:
            'Average value of maxLOS is __volume for room __roomCode rate plan __ratePlanCode  and it is out than of the rule limits min: __ruleLimitMin, max: __ruleLimitMax',
        },
      },
      {
        requiredVariables: [
          'volume',
          'ruleLimitMin',
          'ruleLimitMax',
          'ratePlanCode',
          'roomCode',
        ],
        issueCode: ARIIssueCodeEnum.MAX_LOS_MED,
        translations: {
          [TranslationLanguageEnum.en]:
            'Median value of maxLOS is __volume for room __roomCode rate plan __ratePlanCode  and it is out than of the rule limits min: __ruleLimitMin, max: __ruleLimitMax',
        },
      },
    ],
    'issueCode',
  );

  // Insert Static data issue templates
  await TemplateRepository.bulkWrite(
    [
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.EMAIL,
        translations: {
          [TranslationLanguageEnum.en]: 'Email not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.PHONE,
        translations: {
          [TranslationLanguageEnum.en]: 'Phone not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.WEBSITE,
        translations: {
          [TranslationLanguageEnum.en]: 'Website not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.IMAGES,
        translations: {
          [TranslationLanguageEnum.en]: 'Images not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.MORE_IMAGES,
        translations: {
          [TranslationLanguageEnum.en]: 'More images not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.LATITUDE,
        translations: {
          [TranslationLanguageEnum.en]: 'Latitude not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.LONGITUDE,
        translations: {
          [TranslationLanguageEnum.en]: 'Longitude not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.COUNTRY,
        translations: {
          [TranslationLanguageEnum.en]: 'Country not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.CITY,
        translations: {
          [TranslationLanguageEnum.en]: 'City not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.MAX_INFANT_AGE,
        translations: {
          [TranslationLanguageEnum.en]: 'Max infant age not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.MAX_CHILD_AGE,
        translations: {
          [TranslationLanguageEnum.en]: 'Max child age not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.LOGO,
        translations: {
          [TranslationLanguageEnum.en]: 'Logo not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.FACILITIES,
        translations: {
          [TranslationLanguageEnum.en]: 'Facilities not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.MORE_FACILITIES,
        translations: {
          [TranslationLanguageEnum.en]: 'More Facilities not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.COMMISSION,
        translations: {
          [TranslationLanguageEnum.en]: 'Commission not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.COMMISSION_CORRECT,
        translations: {
          [TranslationLanguageEnum.en]: 'Commission correct not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.CURRENCY,
        translations: {
          [TranslationLanguageEnum.en]: 'Currency not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.VERIFY_CURRENCY,
        translations: {
          [TranslationLanguageEnum.en]: 'Verify currency not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.ROOMS,
        translations: {
          [TranslationLanguageEnum.en]: 'Rooms not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.ROOMS_ENABLED,
        translations: {
          [TranslationLanguageEnum.en]: 'Rooms enabled not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.CANCELLATION_POLICY,
        translations: {
          [TranslationLanguageEnum.en]: 'Cancelation policy not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.MORE_POLICIES,
        translations: {
          [TranslationLanguageEnum.en]: 'More policies not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.USERS,
        translations: {
          [TranslationLanguageEnum.en]: 'Users not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.RATE_PLANS,
        translations: {
          [TranslationLanguageEnum.en]: 'Rate plans not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.RATE_PLANS_BOARDS,
        translations: {
          [TranslationLanguageEnum.en]: 'Rate plans boards not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.RATE_PLANS_PAYMENT,
        translations: {
          [TranslationLanguageEnum.en]: 'Rate plans payment not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.RATE_PLANS_POLICIES,
        translations: {
          [TranslationLanguageEnum.en]: 'Rate plans policies not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.TAXES,
        translations: {
          [TranslationLanguageEnum.en]: 'Taxes not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.FEES,
        translations: {
          [TranslationLanguageEnum.en]: 'Fees not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.SELLABLE_ARI,
        translations: {
          [TranslationLanguageEnum.en]: 'Salable ARI not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.NO_FAILED_ARI,
        translations: {
          [TranslationLanguageEnum.en]: 'No failed ARI not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.PAYMENT_METHOD,
        translations: {
          [TranslationLanguageEnum.en]: 'Payment method not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.TERMS_AND_CONDITIONS,
        translations: {
          [TranslationLanguageEnum.en]: 'Terms and conditions not set',
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.MISSING_REFUNDABLE_RATE_PLAN,
        translations: {
          [TranslationLanguageEnum.en]:
            "Doesn't have at least 1 refundable rate plan",
        },
      },
      {
        requiredVariables: [],
        issueCode: StaticDataIssueCodeEnum.MISSING_NON_REFUNDABLE_RATE_PLAN,
        translations: {
          [TranslationLanguageEnum.en]:
            "Doesn't have at least 1 non-refundable rate plan",
        },
      },
    ],
    'issueCode',
  );
};
