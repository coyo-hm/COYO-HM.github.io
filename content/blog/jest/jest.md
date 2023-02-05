---
date: "2022-01-12"
title: "Jest"
tags: ["Jest", "JavaScript"]
description: ""
published: false
# thumbnail: './add_table_of_contents_in_post.png'
---

# Jest

> TDD(Test-Driven Development) 단순성에 초점을 맞춘 자바스크립트 테스트 프레임 워크

> TDD(Test-Driven Development)
>
> 소프트웨어 개발 방법론 중 하나로 테스트코드를 먼저 작성한 후에 구현 코드를 작성 단계와 리펙토링 단계를 짧은 주기로 반족하는 테스트 주도 개발 방법론

- zero config

  별도의 설정 없이 바로 작업하는 것을 목표로 한다.

- snapshots

  큰 객체로 테스트하는 것을 쉽게 만든다. 스냅샷 또는 인라인에 저장된 객체화 함께 테스트가 실행된다.

- isolated

  성능을 극대화하기 위해 테스트들은 각각의 프로세스에서 병렬 실행된다.

- greatapi

  `it`, `expect`와 같은 Framework, Assertion API를 모두 가지고 있다.

# Jest api 정리

## `toBe`

> 정확한 값 일치 여부 확인

```javascript
expect(2 + 2).toBe(4);
```
