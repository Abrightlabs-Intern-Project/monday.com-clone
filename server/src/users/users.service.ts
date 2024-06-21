import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async createUser(data: CreateUserInput) {
    return await this.prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName ? data.lastName : null,
        email: data.email,
        password: data.password,
      },
      include: {
        tasks: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findFirst({ where: { userId: id } });
  }

  // async updateUser(id: string, data: UpdateUserInput) {
  //   return this.prisma.user.update(id, data);
  // }

  async deleteUser(id: string) {
    await this.prisma.taskUser.deleteMany({
      where: { userId: id },
    });
    await this.prisma.user.delete({ where: { userId: id } });
    return true;
  }
}
