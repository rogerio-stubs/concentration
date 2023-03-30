import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequestFindByEmail } from '../contract/RequestFindByEmail';
import { ResponseUser } from '../contract/ResponseUser';

@Injectable()
export class FindUserByEmailService {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ email }: RequestFindByEmail): Promise<ResponseUser> {
    try {
      const user = await this.prisma.user.findFirstOrThrow({
        where: { email },
      });

      if (!user) throw new NotFoundException(`User not found!`);

      user.password = undefined;

      return user;
    } catch (error) {
      console.log(`FindUserByEmailService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
