import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseTodo } from '../contract/ResponseTodo';

@Injectable()
export class ListTodoService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<ResponseTodo[]> {
    try {
      const todo = await this.prisma.todo.findMany();
      return todo;
    } catch (error) {
      console.log(`ListTodoService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
