---
date: "2022-03-22"
title: "React useMemo와 useCallback"
tags: ["React", "JavaScript"]
description: "React useMemo와 useCallback"
published: false
# thumbnail: './add_table_of_contents_in_post.png'
---

# `useMemo`

```javascript
useMemo(() => fn, [deps]);
```

> deps가 변한다면, fn 함수 실행 후 값을 반환한다.

- 동일한 입력이 들어온다면 재활용하여 중복 연산을 피할 수 있다.

# `useCallback`

```javascript
useCallback(fn, [deps]);
```

> deps가 변한다면, fn 이라는 새로운 함수를 반환한다.
