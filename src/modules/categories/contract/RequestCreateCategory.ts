import { IsNotEmpty, IsString } from 'class-validator';

export class RequestCreateCategory {
  @IsString({ message: 'The Field must be a string' })
  @IsNotEmpty({ message: 'The Field must not be a Empty' })
  name: string;

  @IsString({ message: 'The Field must be a string' })
  description?: string;
}
