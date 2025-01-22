import { Post } from "contentlayer/generated";

export type PostType = Omit<Post, "_raw">;

export interface PostInfoType {
  id: string;
  date: string;
  title: string;
  tags: string[];
  series?: string[];
  description: string;
  thumbnail: string;
  blurThumbnail?: string;
  published: boolean;
}

export interface PostInfoTable {
  [key: string]: PostInfoType;
}
