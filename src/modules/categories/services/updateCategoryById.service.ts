import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequestUpdateCategory } from '../contract/RequestUpdateCategory';
import { ResponseCategory } from '../contract/ResponseCategory';

@Injectable()
export class UpdateCategoryByIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(
    id: string,
    data: RequestUpdateCategory,
  ): Promise<ResponseCategory> {
    try {
      const category = await this.prisma.category.update({
        where: { id: id },
        data,
      });
      return category;
    } catch (error) {
      console.log(`UpdateCategoryByIdService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
