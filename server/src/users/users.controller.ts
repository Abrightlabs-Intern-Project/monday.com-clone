import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Controller('users')
export class UserController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.UsersService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.UsersService.findOne(id);
  }

  @Post()
  async createUser(@Body() data: CreateUserInput) {
    return this.UsersService.createUser(data);
  }

  // @Put(':id')
  // async updateUser(@Param('id') id: string, @Body() data: UpdateUserInput) {
  //   return this.UsersService.updateUser(id, data);
  // }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.UsersService.deleteUser(id);
  }
}
