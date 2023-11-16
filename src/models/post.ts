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
  series?: string;
}

export interface PostAttributeProps {
  key: string;
  path: string;
  series?: string;
  title: string;
  tags: string[];
  date: string;
  published: boolean;
}

export interface PostType {
  fields: {
    slug: string;
  };
  frontMatter: FrontMatterType;
  body: string;
  path: string;
}

export type menuType = "blog" | "project" | "all";

export type showType = "list" | "card";
