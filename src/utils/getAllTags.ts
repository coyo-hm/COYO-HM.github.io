import { TagWithCountType } from "@models/tag";
import TagsTable from "public/static/table/tagsTable.json";

const getAllTags = async (): Promise<Array<TagWithCountType>> => {
  const tagsTable: {
    [key: string]: string[];
  } =
    process.env.NODE_ENV === "development"
      ? TagsTable.unpublished
      : TagsTable.published;

  const tagWithCount = Object.keys(tagsTable).map((tag) => ({
    tag,
    count: tagsTable[tag].length,
  }));

  return tagWithCount.sort(
    (a: TagWithCountType, b: TagWithCountType) => b.count - a.count
  );
};

export default getAllTags;
