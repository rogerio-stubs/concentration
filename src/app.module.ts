import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { TodosModule } from './modules/todos/todos.module';

@Module({
  imports: [UsersModule, CategoriesModule, TodosModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
