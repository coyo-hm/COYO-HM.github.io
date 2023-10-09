import fs from "fs";
import { sync } from "glob";
import frontMatter from "front-matter";
import {
  PostType,
  FrontMatterType,
  TagWithCountType,
  menuType,
} from "@src/models/index";

import TagsTable from "public/static/table/tagsTable.json";
import PostsTable from "public/static/table/postsTable.json";
import { DEFAULT_NUMBER_OF_POST } from "@src/constants";

const DIR_REPLACE_STRING = "/content";

const POST_PATH = `${process.cwd()}${DIR_REPLACE_STRING}`;

export async function getPostAttributeList(
  menu: menuType = "all",
  category?: string
): Promise<
  {
    key: string;
    path: string;
    menu: Omit<menuType, "all">;
    title: string;
    tags: string[];
    date: string;
    published: boolean;
  }[]
> {
  const postsAttributesObj: {
    [key: string]: {
      path: string;
      menu: Omit<menuType, "all">;
      title: string;
      tags: string[];
      date: string;
      published: boolean;
    };
  } = PostsTable;

  return Object.keys(PostsTable)
    .reduce(
      (
        arr: {
          key: string;
          path: string;
          menu: Omit<menuType, "all">;
          title: string;
          tags: string[];
          date: string;
          published: boolean;
        }[],
        key
      ) =>
        (menu === "all" || menu === postsAttributesObj[key].menu) &&
        (postsAttributesObj[key].published ||
          process.env.NODE_ENV === "development") &&
        (category === undefined ||
          postsAttributesObj[key].tags?.includes(category))
          ? [...arr, { ...postsAttributesObj[key], key }]
          : arr,
      []
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
      return 0;
    });
}

export async function getAllPosts(
  menu: menuType = "all",
  category?: string
): Promise<Array<PostType>> {
  const postsList = await getPostAttributeList(menu, category);
  return postsList.map(({ path, key, date, tags, menu: _menu }) => {
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
        slug: `${_menu}/post/${key
          .replace("blog/", "")
          .replace("project/", "")}`,
      },
      path,
    };
  });
}

export async function getPosts(
  menu: menuType = "all",
  page: number = 0,
  category?: string
): Promise<Array<PostType>> {
  const postsAttributesTable = await getPostAttributeList(menu, category);
  const postNumber =
    menu === "project"
      ? DEFAULT_NUMBER_OF_POST.card
      : DEFAULT_NUMBER_OF_POST.list;

  const selectedPostAttributes = postsAttributesTable.slice(
    page * postNumber,
    (page + 1) * postNumber
  );

  return selectedPostAttributes.map(
    ({ path, key, date, tags, menu: _menu }) => {
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
          slug: `${_menu}/post/${key
            .replace("blog/", "")
            .replace("project/", "")}`,
        },
        path,
      };
    }
  );
}

export async function getAllTags(
  menu: Omit<menuType, "all"> = "blog"
): Promise<Array<TagWithCountType>> {
  // const tags: string[] = (await getAllPosts("blog")).reduce<string[]>(
  //   (prev: string[], curr: PostType) => {
  //     curr.frontMatter.tags.forEach((tag: string) => {
  //       prev.push(tag);
  //     });
  //     return prev;
  //   },
  //   []
  // );

  const tagsTable: {
    [key: string]: { [key: string]: string[] };
  } =
    process.env.NODE_ENV === "development"
      ? TagsTable.unpublished
      : TagsTable.published;
  const selectedTagsTable: { [key: string]: string[] } =
    tagsTable[menu as string];
  const tagWithCount = Object.keys(selectedTagsTable).map((tag) => ({
    tag,
    count: selectedTagsTable[tag].length,
  }));

  return tagWithCount.sort(
    (a: TagWithCountType, b: TagWithCountType) => b.count - a.count
  );
}
