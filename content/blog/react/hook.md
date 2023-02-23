---
date: "2023-02-23"
title: "React Hook"
tags: ["React"]
description: ""
published: false
---

# Hook

> “Hook은 함수 컴포넌트에서 React state와 생명주기 기능을 연동할 수 있게 해주는 함수”
>
> - React Docs Hook

- Hook은 class 안에서 동작하지 않는다.
- Hook은 컴포넌트 혹은 커스텀 훅의 최상위 상단에만 호출할 수 있으며, 반복문(loops)이나 조건문(conditions) 안에서 호출할 수 없다.
  만일 반복문이나 조건문 안에서 호출하고 싶다면, 새 컴포넌트를 생성하고 state를 해당 컴포넌트로 옮긴다.
