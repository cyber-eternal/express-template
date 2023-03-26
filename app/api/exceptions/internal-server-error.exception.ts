import { HttpStatus } from '@api/enums';
import { HttpException, HttpExceptionOptions } from './http.exception';

export class InternalServerErrorException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    descriptionOrOptions:
      | string
      | HttpExceptionOptions = 'Internal Server Error',
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.INTERNAL_SERVER_ERROR,
      ),
      HttpStatus.INTERNAL_SERVER_ERROR,
      httpExceptionOptions,
    );
  }
}
