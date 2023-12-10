// export type categoryType = "post" | "series" | "tags";
export type categoryType = "post" | "series";

interface CategoryType {
  id: categoryType;
  link: string;
  label: string;
}

// export const CATEGORY_KEYS: categoryType[] = ["post", "series", "tags"];
export const CATEGORY_KEYS: categoryType[] = ["post", "series"];

export const CATEGORY_INFO: { [key: string]: CategoryType } = {
  post: { id: "post", link: "/post/page/0/all", label: "BLOG" },
  series: { id: "series", link: "/series/page/0", label: "SERIES" },
  // tags: { id: "tags", link: "/tags", label: "TAG" },
};
