import { HttpStatus } from '@api/enums';
import { HttpException, HttpExceptionOptions } from './http.exception';

export class NotFoundException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    descriptionOrOptions: string | HttpExceptionOptions = 'Not Found',
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.NOT_FOUND,
      ),
      HttpStatus.NOT_FOUND,
      httpExceptionOptions,
    );
  }
}
