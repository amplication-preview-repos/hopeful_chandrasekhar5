import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PageViewWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  url?: StringNullableFilter;
};
