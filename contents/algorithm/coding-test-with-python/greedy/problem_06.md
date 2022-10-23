---
date: '2022-10-18'
title: '[이코테] 그리디 알고리즘 문제 6 : 무지의 먹방 라이브'
categories:
  [
    'Algorithm',
    'Algorithm/Problem',
    'Algorithm/Greedy-Algorithm',
    'Algorithm/Programmers',
  ]
summary: '무지의 먹방 라이브'
thumbnail: '../thumbnail.jpg'
---

<div class="noticeBox">이 글은 "이것이 코딩 테스트이다."를 읽고 공부한 기록입니다.</div>

## 문제 설명

> [무지의 문제 풀이](https://programmers.co.kr/learn/courses/30/lessons/42891)

## 내 풀이

```python
import heapq

def solution(food_times, k):
    total = sum(food_times)

    if total <= k:
        return -1

    length = len(food_times)
    foods = [(food_times[i], i + 1) for i in range(length)]
    heapq.heapify(foods)

    cnt_rotate = 0
    total_time = 0


    while total_time + (foods[0][0] - cnt_rotate) * length <= k:
        food = heapq.heappop(foods)[0]
        total_time += (food - cnt_rotate) * length
        cnt_rotate = food
        length -= 1

    result = sorted(foods, key = lambda x: x[1])
    return result[(k - total_time) % length][1]
```

> [시간] 1:41:32 / 30:00
