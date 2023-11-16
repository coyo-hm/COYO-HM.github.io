export interface SeriesInfoNode {
  title: string;
  tags: string[];
  description: string;
  thumbnail: string;
  posts: string[];
}

export interface SeriesInfoTable {
  [key: string]: SeriesInfoNode;
}
