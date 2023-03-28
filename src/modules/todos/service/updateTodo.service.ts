import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseTodo } from '../contract/ResponseTodo';
import { UpdateTodoDTO } from '../dto/UpdateTodo.dto';

@Injectable()
export class UpdateTodoService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(data: UpdateTodoDTO): Promise<ResponseTodo> {
    try {
      const todo = await this.prisma.todo.update({
        where: { id: data.id },
        data,
      });
      return todo;
    } catch (error) {
      console.log(`UpdateTodoService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
