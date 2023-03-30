import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequestCreateCategory } from '../contract/RequestCreateCategory';
import { ResponseCategory } from '../contract/ResponseCategory';
import { CreateCategoryDTO } from '../dto/CreateCategory.dto';

@Injectable()
export class CreateCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(request: RequestCreateCategory): Promise<ResponseCategory> {
    try {
      // esse user_id precisa ser recuperado por meio do paylodToken
      const data: CreateCategoryDTO = {
        ...request,
        user_id: '42645747-a748-4f10-85c2-331c62d37107',
        offensive: 0,
      };
      const category = await this.prisma.category.create({ data });
      return category;
    } catch (error) {
      console.log(`CreateCategoryService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
