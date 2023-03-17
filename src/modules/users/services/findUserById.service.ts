import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseUser } from '../contract/ResponseUser';

@Injectable()
export class FindUserByIdService {
  constructor(private readonly prisma: PrismaService) {}
  async execute(id: string): Promise<ResponseUser> {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });

      if (!user) throw new NotFoundException(`id ${id} not found`);

      user.password = undefined;

      return user;
    } catch (error) {
      console.log(`findUserByIdService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
