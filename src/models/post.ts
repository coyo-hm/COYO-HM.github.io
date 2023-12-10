export interface PostAttributeType {
  key: string;
  path: string;
  title: string;
  published: boolean;
  description: string;
  date: string;
  tags: string[];
  series?: string[];
  thumbnail?: string;
}

export interface PostType {
  frontMatter: PostAttributeType;
  body: string;
  path: string;
  fields: {
    slug: string;
  };
}

export type showType = "list" | "card";

export type PostTableNode = Omit<PostAttributeType, "key">;
