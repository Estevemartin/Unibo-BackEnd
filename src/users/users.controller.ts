import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from "./users.service"
import { user } from '../types';


@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  async getUsers():Promise<user[]> {
    return await this.UsersService.getUsers();
  }
  @Get(":id")
  async getUser(@Param() params):Promise<user>{
    return await this.UsersService.getUser(params.id)
  }
}
