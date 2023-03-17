import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseCategory } from '../contract/ResponseCategory';

@Injectable()
export class ListCategoryByUserIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<ResponseCategory[]> {
    try {
      const user_id = '697c5c97-8181-4a98-a68b-b26c9ac774b9';
      const listOfCategories = await this.prisma.category.findMany({
        where: { user_id },
      });
      return listOfCategories;
    } catch (error) {
      console.log(`FindCategoryByUserId ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
