import TagsTable from "@tables/tagsTable.json";
import { isDev } from "@libs/core";
import { TagTable, TagWithCountType } from "@models/tag";

export const allTags: TagTable = isDev
  ? TagsTable.unpublished
  : TagsTable.published;

const tagWithCount = Object.keys(allTags).map((tag) => ({
  tag,
  count: allTags[tag].length,
}));

export const allTagsWithCount: Array<TagWithCountType> = tagWithCount.sort(
  (a: TagWithCountType, b: TagWithCountType) => b.count - a.count
);
