import { PostAttributeType } from "@models/post";

export interface SeriesAttributeType {
  key: string;
  title: string;
  tags: string[];
  description: string;
  thumbnail: string;
  posts: string[];
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
