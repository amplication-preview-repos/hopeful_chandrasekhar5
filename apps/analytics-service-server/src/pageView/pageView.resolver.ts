import * as graphql from "@nestjs/graphql";
import { PageViewResolverBase } from "./base/pageView.resolver.base";
import { PageView } from "./base/PageView";
import { PageViewService } from "./pageView.service";

@graphql.Resolver(() => PageView)
export class PageViewResolver extends PageViewResolverBase {
  constructor(protected readonly service: PageViewService) {
    super(service);
  }
}
