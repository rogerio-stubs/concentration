import { Body, Controller, Get, Post } from '@nestjs/common';
import { RequestCreateTodo } from '../contract/RequestCreateTodo';
import { ResponseTodo } from '../contract/ResponseTodo';
import { CreateTodoService } from '../service/createTodo.service';
import { ListTodoService } from '../service/listTodo.service';

@Controller('todos')
export class TodoController {
  constructor(
    private readonly createTodoService: CreateTodoService,
    private readonly listTodoService: ListTodoService,
  ) {}

  @Post()
  create(@Body() request: RequestCreateTodo): Promise<ResponseTodo> {
    return this.createTodoService.execute(request);
  }

  @Get()
  delete(): Promise<ResponseTodo[]> {
    return this.listTodoService.execute();
  }
}
