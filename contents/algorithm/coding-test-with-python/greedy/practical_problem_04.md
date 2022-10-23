---
date: '2022-10-18'
title: '[이코테] 그리디 알고리즘 실전문제4 : 1이 될 때까지'
categories: ['Algorithm', 'Algorithm/Problem', 'Algorithm/Greedy-Algorithm']
summary: '1이 될 때까지'
thumbnail: '../thumbnail.jpg'
---

<p>이 글은 "이것이 코딩 테스트이다."를 읽고 공부한 기록입니다.</p>

## 문제 설명

> 어떠한 수 N이 1이 될때 까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고 한다. 단 두 번째 연산은 N이 K로 나누어 떨어질 떼만 선택할 수 있다.
>
> 1.  N에서 1을 뺀다.
> 2.  N을 K로 나눈다.

## 내 풀이

```python
N, K = map(int, input().split())

cnt = 0
while N >= K:
  if N % K != 0:
    cnt += N % K
    N -= N % K
  N = N // K
  cnt += 1
cnt += (N - 1)

print(cnt)
```

> [시간] 9:15
