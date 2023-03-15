import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/createUser.dto';
import { CreateUsersService } from '../services/createUser.service';
import { FindUserByIdService } from '../services/findUserById.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUsersService,
    private readonly findUserByIdService: FindUserByIdService,
  ) {}

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.createUserService.execute(data);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  findOne(@Param('id') id: string) {
    return this.findUserByIdService.execute(id);
  }
}
