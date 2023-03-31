import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseTodo } from '../contract/ResponseTodo';
import { FindTodoByIdService } from './findTodoById.service';
import { UpdateTodoService } from './updateTodo.service';

@Injectable()
export class CheckedTodoService {
  constructor(
    private readonly findTodoByIdService: FindTodoByIdService,
    private readonly updateTodoService: UpdateTodoService,
  ) {}

  async execute(id: string): Promise<ResponseTodo> {
    try {
      const todo = await this.findTodoByIdService.execute(id);

      let changeChecked;
      if (todo.checked) {
        changeChecked = false;
      } else {
        changeChecked = true;
      }

      todo.checked = changeChecked;
      const updateTodo = await this.updateTodoService.execute(todo.id, todo);
      return updateTodo;
    } catch (error) {
      console.log(`CheckedTodoService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
