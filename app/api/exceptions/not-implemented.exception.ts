import { HttpStatus } from '@api/enums';
import { HttpException, HttpExceptionOptions } from './http.exception';

export class NotImplementedException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    descriptionOrOptions: string | HttpExceptionOptions = 'Not Implemented',
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.NOT_IMPLEMENTED,
      ),
      HttpStatus.NOT_IMPLEMENTED,
      httpExceptionOptions,
    );
  }
}
