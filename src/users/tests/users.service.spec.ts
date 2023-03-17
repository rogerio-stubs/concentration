import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersService } from '../services/createUser.service';
import { FindUserByIdService } from '../services/findUserById.service';
import { userSeed } from './users.test';

const prismaMock = {
  user: {
    create: jest.fn().mockReturnValue(10),
  },
};

describe('UsersService', () => {
  let createUserService: CreateUsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUsersService,
        FindUserByIdService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    createUserService = module.get<CreateUsersService>(CreateUsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', async () => {
    const createUser = await createUserService.execute(userSeed);
    expect(createUserService).toBeDefined();
  });
});
