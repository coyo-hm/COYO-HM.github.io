---
date: '2022-10-18'
title: '[이코테] 그리디 알고리즘 문제 5 : 볼링공 고르기'
categories: ['Algorithm', 'Algorithm/Problem', 'Algorithm/Greedy-Algorithm']
summary: '볼링공 고르기'
thumbnail: '../thumbnail.jpg'
---

<p>이 글은 "이것이 코딩 테스트이다."를 읽고 공부한 기록입니다.</p>

## 내 풀이

```python
import itertools

N, M= map(int, input().split())
K = list(map(int, input().split()))

result = [i for i in list(itertools.combinations(K, 2)) if i[0] != i[1]]
print(len(result))
```

> [시간] 8:14 / 30:00
