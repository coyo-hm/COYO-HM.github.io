export type categoryType = "post" | "series" | "tag";

interface CategoryInfoNode {
  id: categoryType;
  link: string;
  label: string;
}

export const CATEGORY_KEYS: categoryType[] = ["post", "series", "tag"];

export const CATEGORY_INFO: { [key: string]: CategoryInfoNode } = {
  post: { id: "post", link: "/post/page/0/all", label: "BLOG" },
  series: { id: "series", link: "/series/page/0/all", label: "SERIES" },
  tag: { id: "tag", link: "/tag", label: "TAG" },
};
