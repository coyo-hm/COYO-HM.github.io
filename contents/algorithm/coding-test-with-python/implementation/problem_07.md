---
date: '2022-10-19'
title: '[이코테] 구현 문제 7 : 럭키 스트레이트'
categories: ['Algorithm', 'Algorithm/Problem', 'Algorithm/Implementation']
summary: '럭키 스트레이트'
thumbnail: '../thumbnail.jpg'
---

<p>이 글은 "이것이 코딩 테스트이다."를 읽고 공부한 기록입니다.</p>

## 내 풀이

```python
N = input()
length = len(N)

front = sum([int(i) for i in list(N[0: length // 2])])
back = sum([int(i) for i in list(N[length // 2:])])

result = "LUCKY" if front == back else "READY"

print(result)
```

> [시간] 6:58 / 20:00
