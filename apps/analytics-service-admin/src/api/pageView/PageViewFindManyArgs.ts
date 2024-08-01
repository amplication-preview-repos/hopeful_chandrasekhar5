import { PageViewWhereInput } from "./PageViewWhereInput";
import { PageViewOrderByInput } from "./PageViewOrderByInput";

export type PageViewFindManyArgs = {
  where?: PageViewWhereInput;
  orderBy?: Array<PageViewOrderByInput>;
  skip?: number;
  take?: number;
};
