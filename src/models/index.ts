export interface FrontMatterType {
  title: string;
  category: string;
  tags: string[];
  published: boolean;
  date: string;
  description: string;
  path: string;
  socialImageUrl?: string;
  socialImageCredit?: string;
  thumbnail?: string;
}

export interface PostType {
  fields: {
    slug: string;
  };
  frontMatter: FrontMatterType;
  body: string;
  path: string;
}

export interface TagWithCountType {
  tag: string;
  count: number;
}

export interface TagsType {
  [key: string]: string;
  tag: string;
}

export type menuType = "blog" | "project" | "all";

export type categoryType =
  | "COMPUTER SCIENCE"
  | "CSS"
  | "FRAMEWORK"
  | "IDE"
  | "LANGUAGE"
  | "LIBRARY"
  | "MANAGEMENT"
  | "PACKAGE MANAGER"
  | "TEST";

export type showType = "list" | "card";
