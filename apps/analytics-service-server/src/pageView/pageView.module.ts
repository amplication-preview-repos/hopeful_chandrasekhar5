import { Module } from "@nestjs/common";
import { PageViewModuleBase } from "./base/pageView.module.base";
import { PageViewService } from "./pageView.service";
import { PageViewController } from "./pageView.controller";
import { PageViewResolver } from "./pageView.resolver";

@Module({
  imports: [PageViewModuleBase],
  controllers: [PageViewController],
  providers: [PageViewService, PageViewResolver],
  exports: [PageViewService],
})
export class PageViewModule {}
