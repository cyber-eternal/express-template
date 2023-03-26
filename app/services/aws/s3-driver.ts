import AWS from 'aws-sdk';
import { awsConfig } from '@app/config';

class S3Driver {
  private readonly s3: AWS.S3;

  constructor() {
    if (!awsConfig) {
      throw new Error(`AWS configuration has not found`);
    }

    const { apiVersion, AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } =
      awsConfig;
    this.s3 = new AWS.S3({
      apiVersion,
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
    });
  }

  getObject(bucket: string, key: string) {
    return this.s3
      .getObject({
        Bucket: bucket,
        Key: key,
      })
      .promise();
  }

  putObject(data: any, bucket: string, key: string) {
    return this.s3
      .putObject({
        Body: data,
        Bucket: bucket,
        Key: key,
      })
      .promise();
  }
}

export default new S3Driver();
