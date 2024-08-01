import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PageViewServiceBase } from "./base/pageView.service.base";

@Injectable()
export class PageViewService extends PageViewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
