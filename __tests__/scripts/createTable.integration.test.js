
jest.mock('fs');
jest.mock('glob');

const fs = require('fs');
const { sync } = require('glob');
const { createTable } = require('@/scripts/createTable');
const path = require('path');

const POST_DIR_PATH = path.join(process.cwd(), 'content/Post');
const SERIES_DIR_PATH = path.join(process.cwd(), 'content/series');
const TABLE_DIR_PATH = path.join(process.cwd(), 'src/constants');

const mockFiles = [
  path.join(POST_DIR_PATH, 'series-a', 'post-1.mdx'),
  path.join(POST_DIR_PATH, 'post-2.md'),
];
const mockSeriesFiles = [path.join(SERIES_DIR_PATH, 'series-a.md')];

const mockFileContents = {
  [mockSeriesFiles[0]]: `---
title: "시리즈 A"
description: "이것은 시리즈 A입니다."
---
`,
  [mockFiles[0]]: `---
title: "포스트 1"
date: "2023-01-01"
tags: ["react", "next.js"]
series: ["series-a"]
published: true
---
`,
  [mockFiles[1]]: `---
title: "포스트 2"
date: "2023-01-31"
tags: ["css", "react"]
published: false
---
`,
};

describe('createTable 통합 테스트', () => {
  let writeSpy;
  beforeEach(() => {
    sync.mockImplementation((pattern) => {
      if (pattern.startsWith(POST_DIR_PATH)) return mockFiles;
      if (pattern.startsWith(SERIES_DIR_PATH)) return mockSeriesFiles;
      return [];
    });

    fs.readFileSync.mockImplementation((path) => {
      const content = mockFileContents[path];
      if (content) return content;
      throw new Error(`테스트에서 정의되지 않은 파일 경로: ${path}`);
    });

    writeSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {});

    fs.mkdirSync.mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('가짜 파일들을 기반으로 올바른 테이블 파일들을 생성해야 한다', () => {
    createTable();
    expect(writeSpy).toHaveBeenCalledTimes(3);

    const postsTableCall = writeSpy.mock.calls.find(call => call[0].endsWith('postsTable.ts'));
    expect(postsTableCall).toBeDefined();
    expect(postsTableCall[1]).toContain('"series-a/post-1"');
    expect(postsTableCall[1]).toContain('"published":true');
    expect(postsTableCall[1]).toContain('"post-2"');
    expect(postsTableCall[1]).toContain('"published":false');

    const tagsTableCall = writeSpy.mock.calls.find(call => call[0].endsWith('tagsTable.ts'));
    const jsonString = tagsTableCall[1]
      .replace('const TagsTable =', '')
      .replace(';export default TagsTable;', '');
    const tagsData = JSON.parse(jsonString);
    expect(tagsData.unpublished.react).toEqual(
      expect.arrayContaining(['series-a/post-1', 'post-2'])
    );
    expect(tagsData.unpublished.css).toEqual(['post-2']);

    const seriesTableCall = writeSpy.mock.calls.find(call => call[0].endsWith('seriesTable.ts'));
    expect(seriesTableCall).toBeDefined();
    expect(seriesTableCall[1]).toContain('"series-a":{"id":"series-a","title":"시리즈 A"');
    expect(seriesTableCall[1]).toContain('"startDate":"2023-01-01T00:00:00.000Z"');
    expect(seriesTableCall[1]).toContain('"endDate":"2023-01-01T00:00:00.000Z"');
    expect(seriesTableCall[1]).toContain('"postIds":["series-a/post-1"]');
    expect(seriesTableCall[1]).toContain('"unpublished":{"series-a"');
    expect(seriesTableCall[1]).toContain('"postIds":["series-a/post-1"]');
  });
});