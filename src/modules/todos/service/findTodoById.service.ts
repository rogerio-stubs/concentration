import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseTodo } from '../contract/ResponseTodo';

@Injectable()
export class FindTodoByIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string): Promise<ResponseTodo> {
    try {
      const todo = await this.prisma.todo.findUnique({ where: { id } });
      if (!todo) throw new NotFoundException(`${id} not found`);
      return todo;
    } catch (error) {
      console.log(`FindTodoByIdService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
