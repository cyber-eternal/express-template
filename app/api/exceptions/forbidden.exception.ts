import { HttpStatus } from '@api/enums';
import { HttpException, HttpExceptionOptions } from './http.exception';

export class ForbiddenException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    descriptionOrOptions: string | HttpExceptionOptions = 'Forbidden',
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.FORBIDDEN,
      ),
      HttpStatus.FORBIDDEN,
      httpExceptionOptions,
    );
  }
}
