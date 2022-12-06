import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DepartmentServiceBase } from "./base/department.service.base";

@Injectable()
export class DepartmentService extends DepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
