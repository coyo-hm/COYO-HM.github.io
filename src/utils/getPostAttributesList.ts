import PostsTable from "public/static/table/postsTable.json";
import { PostAttributeType, PostTableNode } from "@models/post";
import sortPostByDate from "@utils/sortPostByDate";

const getPostAttributesList = async (
  tag?: string
): Promise<PostAttributeType[]> => {
  const postsAttributesObj: {
    [key: string]: PostTableNode;
  } = PostsTable;

  const postAttributeList = Object.keys(PostsTable).reduce(
    (arr: PostAttributeType[], key) =>
      (postsAttributesObj[key].published ||
        process.env.NODE_ENV === "development") &&
      (tag === undefined ||
        tag === "all" ||
        postsAttributesObj[key].tags?.includes(tag))
        ? [...arr, { ...postsAttributesObj[key], key }]
        : arr,
    []
  );

  return sortPostByDate(postAttributeList);
};

export default getPostAttributesList;
