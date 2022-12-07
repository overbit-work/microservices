import { Module } from "@nestjs/common";
import { TeamModuleBase } from "./base/team.module.base";
import { TeamService } from "./team.service";
import { TeamResolver } from "./team.resolver";

@Module({
  imports: [TeamModuleBase],
  providers: [TeamService, TeamResolver],
  exports: [TeamService],
})
export class TeamModule {}
