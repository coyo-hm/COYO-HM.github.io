---
date: '2022-10-19'
title: '[이코테] 그리디 알고리즘 문제 1 : 모험가 길드'
categories: ['Algorithm', 'Algorithm/Problem', 'Algorithm/Greedy-Algorithm']
summary: '모험가 길드'
thumbnail: '../thumbnail.jpg'
---

<div class="noticeBox">이 글은 "이것이 코딩 테스트이다."를 읽고 공부한 기록입니다.</div>

## 내 풀이

```python
N = int(input())
Fear = list(map(int, input().split()))
Fear.sort()
cnt = 0
group = 0

for i in Fear:
  print(i, cnt, group)
  group += 1
  if group >= i:
    cnt += 1
    group = 0

print(cnt)
```

> [시간] 8:38 / 30:00
