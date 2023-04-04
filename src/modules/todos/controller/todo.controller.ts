import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RequestCreateTodo } from '../contract/RequestCreateTodo';
import { RequestUpdateTodo } from '../contract/RequestUpdateTodo';
import { ResponseTodo } from '../contract/ResponseTodo';
import { AssociateTodoToCategory } from '../service/associateTodoToCategory.service';
import { CheckedTodoService } from '../service/checkedTodo.service';
import { CreateTodoService } from '../service/createTodo.service';
import { DeleteTodoByIdService } from '../service/deleteTodoById.service';
import { FindTodoByIdService } from '../service/findTodoById.service';
import { ListTodoService } from '../service/listTodo.service';
import { UpdateTodoService } from '../service/updateTodo.service';
import { CreateRecurrenceService } from '../service/createRecurrence.service';
import { RequestRecurrence } from '../contract/RequestReccuence';

@Controller('todos')
export class TodoController {
  constructor(
    private readonly createTodoService: CreateTodoService,
    private readonly listTodoService: ListTodoService,
    private readonly updateTodoService: UpdateTodoService,
    private readonly checkedTodoService: CheckedTodoService,
    private readonly findTodoByIdService: FindTodoByIdService,
    private readonly deleteTodoByIdService: DeleteTodoByIdService,
    private readonly associateTodoToCategory: AssociateTodoToCategory,
    private readonly createRecurrenceService: CreateRecurrenceService,
  ) {}

  @Post()
  create(@Body() request: RequestCreateTodo): Promise<ResponseTodo> {
    return this.createTodoService.execute(request);
  }

  @Post('/:id/recurrence')
  createRecurrence(
    @Param('id') id: string,
    @Body() request: RequestRecurrence,
  ): Promise<void> {
    return this.createRecurrenceService.execute(id, request);
  }

  @Post('/associate/todo/:todoId/category/:categoryId')
  associate(
    @Param('todoId') todoId: string,
    @Param('categoryId') categoryId: string,
  ): Promise<ResponseTodo> {
    return this.associateTodoToCategory.execute({ categoryId, todoId });
  }

  @Put()
  update(
    @Param('/:id') id: string,
    @Body() request: RequestUpdateTodo,
  ): Promise<ResponseTodo> {
    return this.updateTodoService.execute(id, request);
  }

  @Put('/:id/checked')
  checked(@Param('id') id: string): Promise<ResponseTodo> {
    return this.checkedTodoService.execute(id);
  }

  @Get('/:id')
  getById(@Param('id') id: string): Promise<ResponseTodo> {
    return this.findTodoByIdService.execute(id);
  }

  @Get()
  list(): Promise<ResponseTodo[]> {
    return this.listTodoService.execute();
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string): Promise<void> {
    return this.deleteTodoByIdService.execute(id);
  }
}
