import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseTodo } from '../contract/ResponseTodo';

@Injectable()
export class ListTodoService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<ResponseTodo[]> {
    try {
      const category_id = 'bb044fa3-3303-4857-b18d-e51ce5acc14b';
      const todo = await this.prisma.todo.findMany({
        where: { category_id },
      });
      return todo;
    } catch (error) {
      console.log(`ListTodoService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
