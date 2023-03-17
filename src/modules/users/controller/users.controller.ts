import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RequestCreateUser } from '../contract/RequestCreateUser';
import { RequestFindByEmail } from '../contract/RequestFindByEmail';
import { ResponseUser } from '../contract/ResponseUser';
import { CreateUsersService } from '../services/createUser.service';
import { FindUserByEmailService } from '../services/findUserByEmail.service';
import { FindUserByIdService } from '../services/findUserById.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUsersService,
    private readonly findUserByIdService: FindUserByIdService,
    private readonly findUserByEmailService: FindUserByEmailService,
  ) {}

  @Post()
  create(@Body() data: RequestCreateUser): Promise<ResponseUser> {
    return this.createUserService.execute(data);
  }

  @Get(':id')
  findOneById(@Param('id') id: string): Promise<ResponseUser> {
    return this.findUserByIdService.execute(id);
  }

  @Get()
  findOneByEmail(@Body() data: RequestFindByEmail): Promise<ResponseUser> {
    return this.findUserByEmailService.execute(data);
  }
}
