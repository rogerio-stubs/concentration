import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RequestUpdateTodo {
  @IsString({ message: 'The Field must be a string' })
  @IsNotEmpty({ message: 'The Field must not be a Empty' })
  name: string;

  @IsString({ message: 'The Field must be a string' })
  @IsOptional()
  description?: string;
}
