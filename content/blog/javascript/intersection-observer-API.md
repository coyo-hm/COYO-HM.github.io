---
date: "2022-02-13"
title: "Intersection Observer API"
tags: ["JavaScript"]
description: ""
published: false
# thumbnail: './add_table_of_contents_in_post.png'
---

> Intersection Observer API
> 타겟 요소와 상위 요소 또는 최상위 document의 viewport 사이의 intersection(교차 범위) 내의 변화를 비동기적으로 관찰하는 방법
>
> Intersection Observer API 는 그들이 감시하고자 하는 요소가 다른 요소의 viewport에 들어가거나 나갈때 또는 요청한 부분만큼 두 요소의 교차부분이 변경될 때 마다 실행될 콜백 함수를 등록할 수 있게 한다.

### Intersection Observer API는 다음과 같은 상황에 호출되는 콜백을 생성

- 대상(target) 으로 칭하는 요소가 기기 뷰포트나 특정 요소(이 API에서 이를 root
   요소 혹은 root로 칭함)와 교차함.
- observer가 최초로 타겟을 관측하도록 요청받을 때마다.
