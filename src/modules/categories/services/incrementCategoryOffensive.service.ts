import { Injectable } from '@nestjs/common';
import { FindTodoByCategoryIdService } from 'src/modules/todos/service/findTodoByCategoryId.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ListCategoryByUserIdService } from './listCategoryByUserId.service';

@Injectable()
export class IncrementCategoryOffensiveService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly listCategoriesByUserService: ListCategoryByUserIdService,
    private readonly findTodoByCategoryIdService: FindTodoByCategoryIdService,
  ) {}

  async execute(): Promise<void> {
    try {
      const categories = await this.listCategoriesByUserService.execute();
      categories.map(async (category) => {
        const todos = await this.findTodoByCategoryIdService.execute(
          category.id,
        );
        if (todos != undefined) {
          if (todos.every((todo) => todo.checked === true)) {
            category.offensive += 1;
          } else {
            category.offensive = 0;
          }
        }
        const id = category.id;
        await this.prisma.category.update({ where: { id }, data: category });
      });
    } catch (error) {
      const { message, status } = error;
      console.log(`IncrementCategoryOffensiveService ${message}, ${status}`);
    }
  }
}
