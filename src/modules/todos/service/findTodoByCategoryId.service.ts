import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseTodo } from '../contract/ResponseTodo';

@Injectable()
export class FindTodoByCategoryIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(category_id: string): Promise<ResponseTodo[] | undefined> {
    try {
      const todo = await this.prisma.todo.findMany({ where: { category_id } });
      if (todo.length) {
        return todo;
      }
    } catch (error) {
      console.log(`FindTodoByIdService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
