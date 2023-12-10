import fs from "fs";
import frontMatter from "front-matter";
import { PostAttributeType, PostType } from "@models/post";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";
import getPostAttributesList from "@utils/getPostAttributesList";
import { POST_DIR_PATH } from "@constants/api";

const POST_PATH = `${process.cwd()}${POST_DIR_PATH}`;

export async function getAllPosts(tag?: string): Promise<Array<PostType>> {
  const postsList = await getPostAttributesList(tag);

  return postsList.map(({ path, key, date, tags }) => {
    const file = fs.readFileSync(`${POST_PATH}/${path}`, {
      encoding: "utf8",
    });
    const { attributes, body } = frontMatter<PostAttributeType>(file);
    return {
      frontMatter: {
        ...attributes,
        tags,
        date: new Date(date).toISOString().substring(0, 19),
      },
      body,
      fields: {
        slug: `${key}`,
      },
      path,
    };
  });
}

export async function getPosts(
  page: number = 0,
  size: number = DEFAULT_NUMBER_OF_POST.list,
  tag?: string
): Promise<Array<PostType>> {
  const postsAttributesTable = await getPostAttributesList(tag);

  const selectedPostAttributes = postsAttributesTable.slice(
    page * size,
    (page + 1) * size
  );

  return selectedPostAttributes.map((postAttribute) => {
    const { path, key } = postAttribute;

    const file = fs.readFileSync(`${POST_PATH}/${path}`, {
      encoding: "utf8",
    });
    const { body } = frontMatter<PostAttributeType>(file);
    return {
      frontMatter: postAttribute,
      body,
      fields: {
        slug: key,
      },
      path,
    };
  });
}
