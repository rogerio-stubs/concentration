import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteTodoByIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string): Promise<void> {
    try {
      await this.prisma.todo.delete({ where: { id } });
    } catch (error) {
      console.log(`DeleteTodoByIdService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
