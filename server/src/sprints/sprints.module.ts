import { Module } from '@nestjs/common';
import { SprintsService } from './sprints.service';
import { SprintsResolver } from './sprints.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [SprintsResolver, SprintsService, PrismaService],
})
export class SprintsModule {}
