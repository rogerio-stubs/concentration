import { HttpException, Injectable } from '@nestjs/common';
import { FindCategoryByIdService } from 'src/modules/categories/services/findCategoryById.service';
import { RequestAssociateTodoToCategory } from '../contract/RequestAssociateTodoToCategory';
import { ResponseTodo } from '../contract/ResponseTodo';
import { UpdateTodoDTO } from '../dto/UpdateTodo.dto';
import { UpdateTodoService } from './updateTodo.service';

@Injectable()
export class AssociateTodoToCategory {
  constructor(
    private readonly updateTodoService: UpdateTodoService,
    private readonly findCategoryByIDService: FindCategoryByIdService,
  ) {}

  async execute({
    categoryId,
    todoId,
  }: RequestAssociateTodoToCategory): Promise<ResponseTodo> {
    try {
      await this.findCategoryByIDService.execute(categoryId);

      const data: UpdateTodoDTO = {
        category_id: categoryId,
      };
      const todo = await this.updateTodoService.execute(todoId, data);
      return todo;
    } catch (error) {
      console.log(`AssociateTodoToCategory ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
