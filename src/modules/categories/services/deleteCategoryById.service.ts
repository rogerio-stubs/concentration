import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteCategoryByIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string): Promise<void> {
    try {
      await this.prisma.category.deleteMany({ where: { id: { equals: id } } });
    } catch (error) {
      console.log(`FindCategoryByUserId ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
