import { SortOrder } from "../../util/SortOrder";

export type PageViewOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
