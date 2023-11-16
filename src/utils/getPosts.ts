import fs from "fs";
import frontMatter from "front-matter";
import { PostType, FrontMatterType } from "@models/post";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";
import getPostAttributeList from "@utils/getPostAttributeList";

const DIR_REPLACE_STRING = "/content";

const POST_PATH = `${process.cwd()}${DIR_REPLACE_STRING}`;

export async function getAllPosts(tag?: string): Promise<Array<PostType>> {
  const postsList = await getPostAttributeList(tag);

  return postsList.map(({ path, key, date, tags }) => {
    const file = fs.readFileSync(`${POST_PATH}/${path}`, {
      encoding: "utf8",
    });
    const { attributes, body } = frontMatter<FrontMatterType>(file);
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
  const postsAttributesTable = await getPostAttributeList(tag);

  const selectedPostAttributes = postsAttributesTable.slice(
    page * size,
    (page + 1) * size
  );

  return selectedPostAttributes.map((postAttribute) => {
    const { path, key, date, tags } = postAttribute;

    const file = fs.readFileSync(`${POST_PATH}/${path}`, {
      encoding: "utf8",
    });
    const { attributes, body } = frontMatter<FrontMatterType>(file);
    return {
      frontMatter: {
        ...attributes,
        series: postAttribute?.series || "",
        tags,
        date: new Date(date).toISOString().substring(0, 19),
      },
      body,
      fields: {
        slug: key,
      },
      path,
    };
  });
}
