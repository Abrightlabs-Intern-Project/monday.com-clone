import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Assuming you have PrismaService
import { Sprint, Prisma } from '@prisma/client'; // Import Sprint and Prisma types
import { CreateSprintInput } from './dto/create-sprint.input';
import { UpdateSprintInput } from './dto/update-sprint.input';
@Injectable()
export class SprintsService {
  constructor(private readonly prisma: PrismaService) {}

  async createSprint(data: CreateSprintInput): Promise<string> {
    console.log(data.companyId);
    const sprint = await this.prisma.sprint.create({
      data: {
        name: 'New sprint',
        goals: '',
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        companyId: data.companyId,
      },
      include: {
        tasks: true,
      },
    });
    return sprint.sprintId;
  }

  async findAllSprints(): Promise<Sprint[]> {
    return this.prisma.sprint.findMany({ include: { tasks: true } });
  }

  async findSprintById(sprintId: string): Promise<Sprint | null> {
    return this.prisma.sprint.findUnique({
      where: { sprintId },
      include: { tasks: true },
    });
  }

  async updateSprint(
    sprintId: string,
    data: UpdateSprintInput,
  ): Promise<Sprint> {
    return this.prisma.sprint.update({
      where: { sprintId },
      data: {
        name: data.name,
        goals: data.goals,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
      },
    });
  }

  async deleteSprint(sprintId: string) {
    const res = await this.prisma.task.deleteMany({
      where: { sprintId: sprintId },
    });
    console.log(res);
    return this.prisma.sprint.delete({
      where: { sprintId: sprintId },
      include: { tasks: true },
    });
  }
}
