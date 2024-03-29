import { PostAttributeType } from "@models/post";

export interface SeriesAttributeType {
  key: string;
  title: string;
  tags: string[];
  description: string;
  thumbnail: string;
  blurThumbnail?: string;
  startDate: string;
  endDate: string;
  posts: string[];
}

export interface SeriesAttributeWithPostType
  extends Omit<SeriesAttributeType, "posts"> {
  posts: PostAttributeType[];
}

export interface SeriesPostType {
  key: string;
  posts: PostAttributeType[];
  frontMatter: SeriesTableNode;
  body: string;
  path: string;
  fields: {
    slug: string;
  };
}

export type SeriesTableNode = Omit<SeriesAttributeType, "key">;

export interface SeriesAttributeTableType {
  [key: string]: SeriesTableNode;
}
