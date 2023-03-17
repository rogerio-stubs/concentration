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
        user_id: '697c5c97-8181-4a98-a68b-b26c9ac774b9',
        ...request,
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
