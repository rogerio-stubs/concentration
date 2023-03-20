import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoController } from './controller/todo.controller';
import { CreateTodoService } from './service/createTodo.service';
import { ListTodoService } from './service/listTodo.service';

@Module({
  controllers: [TodoController],
  providers: [CreateTodoService, ListTodoService, PrismaService],
})
export class TodosModule {}
