import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { SprintsService } from './sprints.service';
import { CreateSprintInput } from './dto/create-sprint.input';
import { UpdateSprintInput } from './dto/update-sprint.input';
import { Sprint } from '@prisma/client';

@Controller('sprints')
export class SprintsController {
  constructor(private readonly sprintsService: SprintsService) {}

  @Get()
  async findAll(): Promise<Sprint[]> {
    return this.sprintsService.findAllSprints();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Sprint> {
    return this.sprintsService.findSprintById(id);
  }

  @Post()
  async create(@Body() data: CreateSprintInput): Promise<string> {
    return this.sprintsService.createSprint(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSprintInput,
  ): Promise<Sprint> {
    return this.sprintsService.updateSprint(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Sprint> {
    return this.sprintsService.deleteSprint(id);
  }
}
