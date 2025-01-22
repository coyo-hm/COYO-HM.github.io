import { Series } from "contentlayer/generated";

export type SeriesType = Series;

export interface SeriesInfoType {
  id: string;
  title: string;
  tags: string[];
  description: string;
  thumbnail: string;
  blurThumbnail?: string;
  startDate: string;
  endDate: string;
  postIds: string[];
}

export interface SeriesInfoTable {
  [key: string]: SeriesInfoType;
}

export interface SeriesInfoWithPost extends SeriesInfoType {
  posts: { id: string; slug: string; title: string; no: string }[];
}
