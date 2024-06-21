import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { TasksController } from './tasks.controller';
@Module({
  controllers: [TasksController],
  providers: [TasksService, PrismaService],
})
export class TasksModule {}
