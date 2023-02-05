---
date: "2021-07-12"
title: "React Render 시점 정리"
tags: ["React", "JavaScript"]
description: "React Render 시점 정리"
published: false
# thumbnail: './add_table_of_contents_in_post.png'
---

# React Rendering 시점

1. `state`가 변경될 때
2. `props`가 변경될 때
3. 부모 컴포넌트가 변경될 때
4. `force update()`가 호출될 때

# Class Compoenet Render 순서 정리

### `constructor`

### `componentWillMount`

### `render`

### `componentDidMount`

> [`render`](#render) 직후 함수 실행

### `componentWillReceiveProps`

> 추가적인 렌더링 여부 확인

### `shouldComponentUpdate`

### `componentWillUpdate`

### `componentDidUpdate`

### `componentWillUnmount`
