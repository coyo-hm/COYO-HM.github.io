import { PostAttributeProps } from "@models/post";
import PostsTable from "public/static/table/postsTable.json";
import sortPostByDate from "@utils/sortPostByDate";
type PostTableNode = Omit<PostAttributeProps, "key">;

const getPostAttributeList = async (
  tag?: string
): Promise<PostAttributeProps[]> => {
  const postsAttributesObj: {
    [key: string]: PostTableNode;
  } = PostsTable;

  const postAttributeList = Object.keys(PostsTable).reduce(
    (arr: PostAttributeProps[], key) =>
      (postsAttributesObj[key].published ||
        process.env.NODE_ENV === "development") &&
      (tag === undefined || postsAttributesObj[key].tags?.includes(tag))
        ? [...arr, { ...postsAttributesObj[key], key }]
        : arr,
    []
  );

  return sortPostByDate(postAttributeList);
};

export default getPostAttributeList;
