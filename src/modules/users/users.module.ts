import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { CreateUsersService } from './services/createUser.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindUserByIdService } from './services/findUserById.service';

@Module({
  controllers: [UsersController],
  providers: [CreateUsersService, FindUserByIdService, PrismaService],
})
export class UsersModule {}
