import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Sprint } from './entities/sprint.entity';
import { SprintsService } from './sprints.service';
import { Prisma } from '@prisma/client';
import { CreateSprintInput } from './dto/create-sprint.input';
import { UpdateSprintInput } from './dto/update-sprint.input';

@Resolver(() => Sprint)
export class SprintsResolver {
  constructor(private readonly sprintService: SprintsService) {}

  @Query(() => [Sprint])
  async sprints(): Promise<Sprint[]> {
    return this.sprintService.findAllSprints();
  }

  @Query(() => Sprint)
  async sprint(@Args('id', { type: () => ID }) id: string): Promise<Sprint> {
    return this.sprintService.findSprintById(id);
  }

  @Mutation(() => Sprint)
  async createSprint(@Args('data') data: CreateSprintInput): Promise<Sprint> {
    return this.sprintService.createSprint(data);
  }

  @Mutation(() => Sprint)
  async updateSprint(
    @Args('id', { type: () => ID }) id: string,
    @Args('data') data: UpdateSprintInput,
  ): Promise<Sprint> {
    return this.sprintService.updateSprint(id, data);
  }

  @Mutation(() => Sprint)
  async deleteSprint(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Sprint> {
    return this.sprintService.deleteSprint(id);
  }
}
