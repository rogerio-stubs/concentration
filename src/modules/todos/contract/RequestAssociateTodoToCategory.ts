import { IsNotEmpty, IsString } from 'class-validator';

export class RequestAssociateTodoToCategory {
  @IsString({ message: 'The Field must be a string' })
  @IsNotEmpty({ message: 'The Field must not be a Empty' })
  todoId: string;

  @IsString({ message: 'The Field must be a string' })
  @IsNotEmpty({ message: 'The Field must not be a Empty' })
  categoryId: string;
}
