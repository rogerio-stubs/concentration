import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseCategory } from '../contract/ResponseCategory';

@Injectable()
export class FindCategoryByIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string): Promise<ResponseCategory> {
    try {
      const category = await this.prisma.category.findFirst({ where: { id } });

      if (!category) throw new NotFoundException(`Category Not found`);

      return category;
    } catch (error) {
      console.log(`FindCategoryById ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
