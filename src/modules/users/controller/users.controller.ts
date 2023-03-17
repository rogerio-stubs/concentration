import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RequestCreateUser } from '../contract/RequestCreateUser';
import { ResponseUser } from '../contract/ResponseUser';
import { CreateUsersService } from '../services/createUser.service';
import { FindUserByIdService } from '../services/findUserById.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUsersService,
    private readonly findUserByIdService: FindUserByIdService,
  ) {}

  @Post()
  create(@Body() data: RequestCreateUser): Promise<ResponseUser> {
    return this.createUserService.execute(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ResponseUser> {
    return this.findUserByIdService.execute(id);
  }
}
