import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequestCreateTodo } from '../contract/RequestCreateTodo';
import { ResponseTodo } from '../contract/ResponseTodo';
import { CreateTodoDTO } from '../dto/CreateTodo.dto';

@Injectable()
export class CreateTodoService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(request: RequestCreateTodo): Promise<ResponseTodo> {
    try {
      const data: CreateTodoDTO = {
        ...request,
        checked: false,
      };
      const todo = await this.prisma.todo.create({ data });
      return todo;
    } catch (error) {
      console.log(`CreateTodoService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
