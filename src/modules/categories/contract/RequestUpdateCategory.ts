import { IsString } from 'class-validator';

export class RequestUpdateCategory {
  @IsString({ message: 'The Field must be a string' })
  name?: string;

  @IsString({ message: 'The Field must be a string' })
  description?: string;
}
