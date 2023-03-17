import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequestCreateUser } from '../contract/RequestCreateUser';
import { ResponseUser } from '../contract/ResponseUser';

@Injectable()
export class CreateUsersService {
  constructor(private readonly prisma: PrismaService) {}
  async execute(data: RequestCreateUser): Promise<ResponseUser> {
    try {
      const { email } = data;
      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      if (user) throw new BadRequestException(`Email ${email} already exists`);

      const newUser = await this.prisma.user.create({ data });
      newUser.password = undefined;

      return newUser;
    } catch (error) {
      console.log(`createUserService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
