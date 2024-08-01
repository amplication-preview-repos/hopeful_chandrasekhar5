import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PageViewService } from "./pageView.service";
import { PageViewControllerBase } from "./base/pageView.controller.base";

@swagger.ApiTags("pageViews")
@common.Controller("pageViews")
export class PageViewController extends PageViewControllerBase {
  constructor(protected readonly service: PageViewService) {
    super(service);
  }
}
