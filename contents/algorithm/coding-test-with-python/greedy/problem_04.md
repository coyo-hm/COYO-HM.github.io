---
date: '2022-10-18'
title: '[이코테] 그리디 알고리즘 문제 4 : 만들 수 없는 금액'
categories: ['Algorithm', 'Algorithm/Problem', 'Algorithm/Greedy-Algorithm']
summary: '만들 수 없는 금액'
thumbnail: '../thumbnail.jpg'
---

<p>이 글은 "이것이 코딩 테스트이다."를 읽고 공부한 기록입니다.</p>

## 내 풀이

```python
import itertools

N = int(input())
M = list(map(int, input().split()))

nums = set(M)

for i in range(2, N):
  for j in list(itertools.combinations(M, i)):
    nums.add(sum(j))


print(list(set(range(1, sum(M))) - nums)[0])
```

> [시간] 20:08 / 30:00
