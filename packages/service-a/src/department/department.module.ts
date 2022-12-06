import { Module } from "@nestjs/common";
import { DepartmentModuleBase } from "./base/department.module.base";
import { DepartmentService } from "./department.service";
import { DepartmentResolver } from "./department.resolver";

@Module({
  imports: [DepartmentModuleBase],
  providers: [DepartmentService, DepartmentResolver],
  exports: [DepartmentService],
})
export class DepartmentModule {}
