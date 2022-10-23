---
date: '2022-10-18'
title: '[이코테] 그리디 알고리즘 문제 3 : 문자열 뒤집기'
categories: ['Algorithm', 'Algorithm/Problem', 'Algorithm/Greedy-Algorithm']
summary: '문자열 뒤집기'
thumbnail: '../thumbnail.jpg'
---

<p>이 글은 "이것이 코딩 테스트이다."를 읽고 공부한 기록입니다.</p>

## 내 풀이

```python
S = input()

zeroCnt = 0
oneCnt = 0

for i in range(1, len(S)):
  if S[i] != S[i - 1]:
    if S[i - 1] == "0":
      zeroCnt += 1
    else:
      oneCnt += 1
    if i == len(S) - 1:
      if S[i] == "0":
        zeroCnt += 1
      else:
        oneCnt += 1

print(min(oneCnt, zeroCnt))
```

> [시간] 20:20 / 30:00
