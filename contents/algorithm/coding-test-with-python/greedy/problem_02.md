---
date: '2022-10-19'
title: '[이코테] 그리디 알고리즘 문제 2 : 곱하기 혹은 더하기'
categories: ['Algorithm', 'Algorithm/Problem', 'Algorithm/Greedy-Algorithm']
summary: '곱하기 혹은 더하기'
thumbnail: '../thumbnail.jpg'
---

<div class="noticeBox">이 글은 "이것이 코딩 테스트이다."를 읽고 공부한 기록입니다.</div>
## 내 풀이

```python
S = input()

result = 0
for n in S:
  result = max(result + int(n), result * int(n))

print(result)
```

> [시간] 2:30 / 30:00
