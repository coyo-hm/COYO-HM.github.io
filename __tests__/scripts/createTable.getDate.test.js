const { getDate } = require('@/scripts/createTable');

describe('getDate 헬퍼 함수', () => {
  const dateA = '2023-01-01T00:00:00.000Z';
  const dateB = '2023-01-31T00:00:00.000Z';

  it('type="start"일 때 더 이른 날짜를 반환해야 한다', () => {
    const result = getDate('start', dateA, dateB);
    expect(result).toEqual(new Date(dateA)); // dateA가 더 이름
  });

  it('type="start"일 때 순서가 바뀌어도 더 이른 날짜를 반환해야 한다', () => {
    const result = getDate('start', dateB, dateA);
    expect(result).toEqual(new Date(dateA)); // dateA가 더 이름
  });

  it('type="end"일 때 더 늦은 날짜를 반환해야 한다', () => {
    const result = getDate('end', dateA, dateB);
    expect(result).toEqual(new Date(dateB)); // dateB가 더 늦음
  });

  it('type="end"일 때 순서가 바뀌어도 더 늦은 날짜를 반환해야 한다', () => {
    const result = getDate('end', dateB, dateA);
    expect(result).toEqual(new Date(dateB)); // dateB가 더 늦음
  });
});