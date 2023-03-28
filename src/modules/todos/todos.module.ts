import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoController } from './controller/todo.controller';
import { CheckedTodoService } from './service/checkedTodo.service';
import { CreateTodoService } from './service/createTodo.service';
import { DeleteTodoByIdService } from './service/deleteTodoById.service';
import { FindTodoByIdService } from './service/findTodoById.service';
import { ListTodoService } from './service/listTodo.service';
import { UpdateTodoService } from './service/updateTodo.service';

@Module({
  controllers: [TodoController],
  providers: [
    CreateTodoService,
    ListTodoService,
    UpdateTodoService,
    CheckedTodoService,
    FindTodoByIdService,
    DeleteTodoByIdService,
    PrismaService,
  ],
})
export class TodosModule {}
