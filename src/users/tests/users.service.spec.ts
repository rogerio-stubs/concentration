import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersService } from '../services/createUser.service';
import { FindUserByIdService } from '../services/findUserById.service';
import { userSeed } from './users.test';

describe('UsersService', () => {
  let createUserService: CreateUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateUsersService, FindUserByIdService, PrismaService],
    }).compile();

    createUserService = module.get<CreateUsersService>(CreateUsersService);
  });

  it('should be defined', async () => {
    const createUser = await createUserService.execute(userSeed);
    expect(createUserService).toBeDefined();
  });
});
