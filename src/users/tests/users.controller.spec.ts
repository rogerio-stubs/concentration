import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../controller/users.controller';
import { UsersService } from '../services/users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });
});

// O teste do controller geralmente é focado na validação das entradas, saídas e comportamentos do endpoint HTTP,
// enquanto o teste do service geralmente é focado na lógica de negócios e interações com o banco de dados.
