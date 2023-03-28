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
import { CheckedTodoService } from '../service/checkedTodo.service';
import { CreateTodoService } from '../service/createTodo.service';
import { DeleteTodoByIdService } from '../service/deleteTodoById.service';
import { FindTodoByIdService } from '../service/findTodoById.service';
import { ListTodoService } from '../service/listTodo.service';
import { UpdateTodoService } from '../service/updateTodo.service';

@Controller('todos')
export class TodoController {
  constructor(
    private readonly createTodoService: CreateTodoService,
    private readonly listTodoService: ListTodoService,
    private readonly updateTodoService: UpdateTodoService,
    private readonly checkedTodoService: CheckedTodoService,
    private readonly findTodoByIdService: FindTodoByIdService,
    private readonly deleteTodoByIdService: DeleteTodoByIdService,
  ) {}

  @Post()
  create(@Body() request: RequestCreateTodo): Promise<ResponseTodo> {
    return this.createTodoService.execute(request);
  }

  @Put()
  update(@Body() request: RequestUpdateTodo): Promise<ResponseTodo> {
    return this.updateTodoService.execute(request);
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
