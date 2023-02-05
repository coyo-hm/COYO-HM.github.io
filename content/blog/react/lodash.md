---
date: "2022-01-10"
title: "Lodash 자주 사용하는 함수 정리"
tags: ["React", "TypeScript", "Lodash", "JavaScript"]
description: "자주 사용하는 lodash 함수 정리"
published: false
# thumbnail: './add_table_of_contents_in_post.png'
---

## `get`

> 객체에서 원하는 값 찾기

```javascript
get(찾을 장소, 가져올 키, 기본 값);
```

## `sortby`

> collection 값들을 원하는 필드를 기준으로 오름차순으로 정렬

```javascript
sortBy(정렬을 원하는 컬렉션, 정렬 기준 필드값);
```

- 여러 개의 필드값으로도 정렬 가능

```javascript
sortBy(정렬을 원하는 컬렉션, [정렬 기준 필드값 1, 정렬 기준 필드값 2]);
```

- 내림차 순으로 정렬하기 위해서는, `reverse()` 사용

```javascript
sortBy(정렬을 원하는 컬렉션, 정렬 기준 필드값).reverse();
```

## `clonedeep`

> 객체 복사
