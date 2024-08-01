import { PageView as TPageView } from "../api/pageView/PageView";

export const PAGEVIEW_TITLE_FIELD = "url";

export const PageViewTitle = (record: TPageView): string => {
  return record.url?.toString() || String(record.id);
};
